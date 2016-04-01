var email = require('emailjs');

//Send an email for error message
function sendEmail( subject, body, callback ) {

	/*if( typeof(emailTo) == "array" || typeof(emailTo) == "object" ){
		emailTo = emailTo.join(",")
	}*/
	//console.log(emailTo+'hi')
    var server  = email.server.connect({
        user:       "charan.getflow@gmail.com",
        password:   "ch@r@ngetflow",
        host:       "smtp.gmail.com",
        ssl:        true
    });
    server.send( {
            from:  "Sakhatech <donotreply@sakhatech.com>",
            //to:    "Shruthi Achappa <shruthi.achappa@sakhatech.com>",
            to: "charan.ka@sakhatech.com",
            subject: subject,
            text:  body,
            attachment: 
            [
               {data:"<html>"+body+"</html>", alternative:true},
            ]
        },
        function( err, message ) {
			//console.log(err)
			//console.log(message)
            if(err) {
                callback( {"success": false} );
            }
            else {
                callback( {"success": true} );
            }
        }
    );
}

module.exports.sendEmail = sendEmail;
