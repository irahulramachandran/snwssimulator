var dbExecute = require('../common/dbExecute.js');
var messages = require('../common/messages.js');
var utils = require('../common/utils.js');
var fs = require("fs");
var mime = require('mime');
var request = require('request');
var flag = true;
var winston = require('winston');

var commonConstants = require('../common/constants_live.js');

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({ filename: commonConstants.LOG_FILE_PATH })
	]
});

//Get from DB
function save( req, constants, callback ) {
	console.log(req.body);
	var respObj = req.body;
	callback(respObj);
}

module.exports.save = save;
