exports.define = function ( name, value, exportsObject ) {
    if ( !exportsObject )
    {
        if ( exports.exportsObject )
            exportsObject = exports.exportsObject;
        else 
            exportsObject = exports;        
    }

    Object.defineProperty( exportsObject, name, {
        'value': value,
        'enumerable': true,
        'writable': false,
    });
}
exports.exportObject = null;

//DB MESSAGES
this.define( 'CONNECTION_FAILURE', "Could not connect to database" );
this.define( 'QUERY_ERROR', "There was an error in query, please try again!" );
this.define( 'CONNECTION_SUCCESS', "Connection Established" );

//LOGIN MESSAGES
this.define( 'LOGIN_SUCCESS', "" );
this.define( 'LOGIN_FAILURE', "The username or password you entered is incorrect" );

this.define( 'LOGIN_USERNAME_REQUIRED', "Please enter username" );
this.define( 'LOGIN_PASSWORD_REQUIRED', "Please enter password" );
this.define( 'LOGIN_FIELDS_REQUIRED', "Please enter all the required fields" );

//DATA MESSAGES
this.define( 'NO_DATA_FOUND', "No data found" );
this.define( 'DATA_FOUND', "Data exists" );
this.define( 'UPDATE_SUCCESS', "Successfully updated..!!" );
this.define( 'UPDATE_FAILURE', "Failed to update..!!" );
this.define( 'DATA_NOT_INSERTED', 'Data could not be inserted. Please try again..!' );
this.define( 'DATA_INSERTED', 'Successfully inserted' );
this.define( 'PARAMETER_MISSING', 'Parameter missing in the request' );
this.define( 'EMAIL_SUBJECT', 'Diabetacare Error Description' );
this.define( 'POSTED_SUCCESSFULLY', 'Data has been posted successfully' );
this.define( 'POSTED_FAILURE', 'Data has not been posted' );
