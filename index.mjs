// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-array-max-typed-array-length@esm/index.mjs";var n=t.isPrimitive,r=e/2;var s=function(t){return null!==t&&"object"==typeof t&&n(t.length)&&t.length<=r&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength&&"function"==typeof t.get&&"function"==typeof t.set};export{s as default};
//# sourceMappingURL=index.mjs.map
