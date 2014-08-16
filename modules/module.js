(function ( root, factory ) {
    'use strict';
    if ( typeof define === 'function' && define.amd ) {
        define( factory );
    }
    else if ( typeof exports === 'object' ) {
        exports = module.exports = factory( root );
    }
    else {
        root.Module = ( root.Module || {} );
        root.Module.MyModule = factory( root, document, jQuery );
    }
})( this, function( root, document, $, undefined ) {
    'use strict';

    var MyModule = function() {
        var $public = {};
        var $private = {};

        $public.init = function init() {
            return [ 'init', document, $, undefined ];
        };

        return $public;
    };

    return MyModule;
});
