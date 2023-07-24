// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,l=r.__lookupSetter__,c=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,c){var f,a,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof c||null===c||"[object Array]"===n.call(c))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+c+"`.");if((a="value"in c)&&(u.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=r,delete e[t],e[t]=c.value,e.__proto__=f):e[t]=c.value),p="get"in c,y="set"in c,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,c.get),y&&i&&i.call(e,t,c.set),e};function f(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function a(e){return"number"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",m=y()?function(e){var t,r,n,o,i;if(null==e)return b.call(e);r=e[_],i=_,t=null!=(o=e)&&s.call(o,i);try{e[_]=void 0}catch(t){return b.call(e)}return n=b.call(e),t?e[_]=r:delete e[_],n}:function(e){return b.call(e)},d=Number,v=d.prototype.toString,g=y();function j(e){return"object"==typeof e&&(e instanceof d||(g?function(e){try{return v.call(e),!0}catch(e){return!1}}(e):"[object Number]"===m(e)))}function h(e){return a(e)||j(e)}f(h,"isPrimitive",a),f(h,"isObject",j);var O=Number.POSITIVE_INFINITY,S=d.NEGATIVE_INFINITY,T=Math.floor;function E(e){return e<O&&e>S&&T(t=e)===t;var t}function P(e){return a(e)&&E(e)}function w(e){return j(e)&&E(e.valueOf())}function I(e){return P(e)||w(e)}function N(e){return P(e)&&e>=0}function x(e){return w(e)&&e.valueOf()>=0}function A(e){return N(e)||x(e)}return f(I,"isPrimitive",P),f(I,"isObject",w),f(A,"isPrimitive",N),f(A,"isObject",x),function(e){return null!==e&&"object"==typeof e&&N(e.length)&&e.length<=4503599627370495.5&&"number"==typeof e.BYTES_PER_ELEMENT&&"number"==typeof e.byteOffset&&"number"==typeof e.byteLength&&"function"==typeof e.get&&"function"==typeof e.set}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isComplexTypedArrayLike=t();
//# sourceMappingURL=browser.js.map
