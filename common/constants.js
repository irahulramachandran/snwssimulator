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

this.define( 'DB_USERNAME', 'root' );
this.define( 'DB_PASSWORD', 's@kh@!23' );
this.define( 'DB_HOST', 'localhost' );
this.define( 'DB_NAME', 'SNDB' );
this.define( 'BASE_URL', 'http://localhost:3000/' );

// this.define( 'RECORD_NOT_USED', 0 );
// this.define( 'RECORD_USED', 1 );
// this.define( 'SENT', 1 );
// this.define( 'NOT_SENT', 0 );
