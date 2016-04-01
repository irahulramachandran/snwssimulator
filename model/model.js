var request = require('request');
var messages = require( '../common/messages.js' );

function execute( req, res, app, constants ) {

    //Get the URL
    var path = req.path;
    var pathArray = path.split( "/" );

    var model = pathArray[2];
    var method = pathArray[3];

    var response =  {
                        "success":false,
                        "result": {},
                        "message": ""
                    };

    res.contentType = 'json';
    res.status( 200 );

    //Call the object and the method
    var object = require( "./"+model+".js" );

    object[method]( req, constants, function( objectResponse ){
        console.log(new Date());
		    res.send( objectResponse );
    });
}

module.exports.execute = execute;
