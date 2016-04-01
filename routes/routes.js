var request = require('request');
var model = require('../model/model.js');

module.exports = function(app) {
    // user post
    app.post('/snws/*', function(req, res) {
        var from = req.headers.host.split(":");
        var constants = require('../common/constants_live.js');
        model.execute( req, res, app, constants );
    });

    //User get
    app.get('/snws/*', function(req, res) {
        var from = req.headers.host.split(":")
        var constants = require('../common/constants_live.js');
        model.execute( req, res, app, constants );
    });
}
