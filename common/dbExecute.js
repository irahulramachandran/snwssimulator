//obtains connection to database
var messages = require( '../common/messages.js' );
var request = require('request');

var mysql = require("mysql");
var testClient;
var liveClient;

function getConnection( req, callback ) {
    var from = req.headers.host.split(":")
    if ( from[0] == "test.diabetasense.com" ) {
        var response = { "success": false, "message": "", "result": {} };
        if (testClient == null || testClient == 'undefined') {
            var testConstants = require('../common/constants_test.js');
            handleDisconnect( testClient, testConstants, function(clientResp){
                if ( clientResp.success ) {
                    testClient = clientResp.result;
                    response.result = testClient;
                    response.success = true;
                    callback(response);
                } else {
                    callback(response);
                }
            });
        } else {
            response.result = testClient;
            response.success = true;
            callback(response);
        }
    } else {
        var response = { "success": false, "message": "", "result": {} };
        if (liveClient == null || liveClient == 'undefined') {
            var liveConstants = require('../common/constants_live.js');
            handleDisconnect( liveClient, liveConstants, function(clientResp){
                if ( clientResp.success ) {
                    liveClient = clientResp.result;
                    response.result = liveClient;
                    response.success = true;
                    callback(response);
                } else {
                    callback(response);
                }
            });
        } else {
            response.result = liveClient;
            response.success = true;
            callback(response);
        }
    }
}

function handleDisconnect( client, constants, callback ) {

    //Initialise
    var response = { "success": false, "message": "", "result": {} };

    //Set Test DB variable
    client = mysql.createConnection({
        user: constants.DB_USERNAME,
        password: constants.DB_PASSWORD,
        host: constants.DB_HOST,
        database: constants.DB_NAME,
        debug: false
    });

    client.connect(function(err) {
        if(err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect(client, constants, callback), 2000);
        } else {
            console.log("client = "+client);
            response.success = true;
            response.result = client
            callback(response);
        }
    });
    client.on('error', function(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect( client, constants, callback );
        } else {
            callback(response)
        }
    });
}

function execute( sql, req, client, callback ) {

    //Initialise
    var response = { "success": false, "message": "", "result": {} };
    //Execute query
    client.query( sql, function ( err, resultset ) {
        if (err) {
            //Close the connection and return the error message
            //client.end();
            response.message = messages.QUERY_ERROR;
            callback( response )
        }
        else {
            response.success = true;
            response.result = resultset;
            //client.end();
            callback( response );
        }
    });
}

module.exports.execute = execute;
module.exports.getConnection = getConnection;
