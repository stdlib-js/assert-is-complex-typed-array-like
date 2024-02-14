// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-array-max-typed-array-length@v0.2.0-esm/index.mjs";var n=e/2;function s(e){return null!==e&&"object"==typeof e&&t(e.length)&&e.length<=n&&"number"==typeof e.BYTES_PER_ELEMENT&&"number"==typeof e.byteOffset&&"number"==typeof e.byteLength&&"function"==typeof e.get&&"function"==typeof e.set}export{s as default};
//# sourceMappingURL=index.mjs.map
