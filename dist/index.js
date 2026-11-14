"use strict";var o=function(e,t){return function(){try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw (t=0, n)}};};var i=o(function(g,r){
var f=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,s=require('@stdlib/constants-array-max-typed-array-length/dist'),p=s/2;function y(e){return e!==null&&typeof e=="object"&&f(e.length)&&e.length<=p&&typeof e.BYTES_PER_ELEMENT=="number"&&typeof e.byteOffset=="number"&&typeof e.byteLength=="number"&&typeof e.get=="function"&&typeof e.set=="function"}r.exports=y
});var b=i();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
