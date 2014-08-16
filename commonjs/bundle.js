(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function() {
    'use strict';
    var myModule = require( '../modules/module' );
    console.log( myModule().init() );
})();

},{"../modules/module":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
