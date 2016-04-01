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
	  "OTA_HotelRatePlanNotifRS": {
	    "-xmlns": "http://www.opentravel.org/OTA/2003/05",
	    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
	    "-xsi:schemaLocation": "http://www.opentravel.org/OTA/2003/05 OTA_HotelRatePlanNotifRQ.xsd",
	    "-Version": "1.001",
	    "-EchoToken": "000",
	    "-TimeStamp": "2005-08-03T09:30:47-05:00",
	    "-MessageContentCode": "8",
	    "Success": " "
	  }
	};
	// responseOBJ = {
	//   "OTA_HotelRatePlanNotifRS": {
	//     "-xmlns": "http://www.opentravel.org/OTA/2003/05",
	//     "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
	//     "-xsi:schemaLocation": "http://www.opentravel.org/OTA/2003/05 OTA_HotelRatePlanNotifRQ.xsd",
	//     "-Version": "1.001",
	//     "-EchoToken": "000",
	//     "-TimeStamp": "2005-08-03T09:30:47-05:00",
	//     "-MessageContentCode": "8",
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

function checkavailability(req, constants, callback){
	console.log(req.body);
	var responseOBJ = {};
	responseOBJ = {
		  "OTA_HotelAvailRS": {
		    "-xmlns": "http://www.opentravel.org/OTA/2003/05",
		    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
		    "-Version": "1.01",
		    "-TimeStamp": "2007-07-31T20:04:27+12:00",
		    "-xsi:schemaLocation": "http://www.opentravel.org/OTA/2003/05 OTA_HotelAvailRS.xsd",
		    "RoomStays": {
		      "RoomStay": {
		        "RoomTypes": {
		          "RoomType": {
		            "-RoomTypeCode": "DZ",
		            "-NumberOfUnits": "10"
		          }
		        },
		        "RoomRates": {
		          "RoomRate": [
		            {
		              "-RoomTypeCode": "DZ",
		              "-RatePlanCode": "SR",
		              "Rates": {
		                "Rate": [
		                  {
		                    "-EffectiveDate": "2016-06-30",
		                    "-ExpireDate": "2016-07-01",
		                    "Base": {
		                      "-AmountAfterTax": "100.00",
		                      "-CurrencyCode": "AUD"
		                    }
		                  },
		                  {
		                    "-EffectiveDate": "2016-07-01",
		                    "-ExpireDate": "2016-07-02",
		                    "Base": {
		                      "-AmountAfterTax": "110.00",
		                      "-CurrencyCode": "AUD"
		                    }
		                  },
		                  {
		                    "-EffectiveDate": "2016-07-02",
		                    "-ExpireDate": "2016-07-03",
		                    "Base": {
		                      "-AmountAfterTax": "120.00",
		                      "-CurrencyCode": "AUD"
		                    }
		                  }
		                ]
		              }
		            },
		            {
		              "-RoomTypeCode": "DZ",
		              "-RatePlanCode": "ADV",
		              "Rates": {
		                "Rate": [
		                  {
		                    "-EffectiveDate": "2016-06-30",
		                    "-ExpireDate": "2016-07-01",
		                    "Base": {
		                      "-AmountAfterTax": "200.00",
		                      "-CurrencyCode": "AUD"
		                    }
		                  },
		                  {
		                    "-EffectiveDate": "2016-07-01",
		                    "-ExpireDate": "2016-07-02",
		                    "Base": {
		                      "-AmountAfterTax": "210.00",
		                      "-CurrencyCode": "AUD"
		                    }
		                  },
		                  {
		                    "-EffectiveDate": "2016-07-02",
		                    "-ExpireDate": "2016-07-03",
		                    "Base": {
		                      "-AmountAfterTax": "220.00",
		                      "-CurrencyCode": "AUD"
		                    }
		                  }
		                ]
		              }
		            }
		          ]
		        }
		      }
		    }
		  }
		};


	// 		responseOBJ = {
	//   "OTA_HotelAvailRS": {
	//     "-xmlns": "http://www.opentravel.org/OTA/2003/05",
	//     "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
	//     "-Version": "1.01",
	//     "-TimeStamp": "2007-07-31T20:04:27+12:00",
	//     "-xsi:schemaLocation": "http://www.opentravel.org/OTA/2003/05 OTA_HotelAvailRS.xsd",
	//     "Errors": {
	//       "Error": {
	//         "-Status": "NotProcessed | Incomplete | Complete | Unknown",
	//         "-ShortText": "Not processed"
	//       }
	//     }
	//   }
	// }

	callback(responseOBJ);
}

module.exports.save = save;
module.exports.checkavailability = checkavailability;
