(function ( root, factory ) {
    'use strict';
    if ( typeof define === 'function' && define.amd ) {
        define( factory );
    }
    else if ( typeof exports === 'object' ) {
        exports = module.exports = factory;
    }
    else {
        root.Module = ( root.Module || {} );
        root.jQuery = factory.call( null, root );
    }
})( this, function( root, undefined ) {
    'use strict';

    var $public = {};
    var $private = {};

    $public.init = function init() {
        return 'jQuery';
    };

    return $public;
});
