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
	var responseOBJ = {};
	responseOBJ = {
	  "OTA_HotelDescriptiveContentNotifRS": {
	    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
	    "-xmlns": "http://www.opentravel.org/OTA/2003/05",
	    "-xsi:schemaLocation": "http://www.opentravel.org/OTA/2003/05 OTA_HotelDescriptiveContentNotifRS.xsd",
	    "-Version": "3.000",
	    "Success": " "
	  }
	};
	// responseOBJ = {
	//   "OTA_HotelDescriptiveContentNotifRS": {
	//     "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
	//     "-xmlns": "http://www.opentravel.org/OTA/2003/05",
	//     "-xsi:schemaLocation": "http://www.opentravel.org/OTA/2003/05 OTA_HotelDescriptiveContentNotifRS.xsd",
	//     "-Version": "3.000",
	//     "Errors": {
	//       "Error": {
	//         "-Status": "NotProcessed | Incomplete | Complete | Unknown",
	//         "-ShortText": "Not processed"
	//       }
	//     }
	//   }
	// };

	callback(responseOBJ);
}

module.exports.save = save;
