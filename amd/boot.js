;(function( window ) {
    'use strict';

    requirejs.config({
        paths : {
            'jquery' : './lib/jquery',
            'modules' : '../modules'
        }
    });

    requirejs([ 'modules/module' ], function( myModule ) {
        console.log( myModule().init() );
    });
})();
