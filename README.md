<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isComplexTypedArrayLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is complex-typed-array-like.



<section class="usage">

## Usage

```javascript
import isComplexTypedArrayLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-typed-array-like@deno/mod.js';
```

#### isComplexTypedArrayLike( value )

Tests if a value is complex-typed-array-like.

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';

var bool = isComplexTypedArrayLike( new Complex64Array() );
// returns true

bool = isComplexTypedArrayLike({
    'length': 10,
    'byteOffset': 0,
    'byteLength': 10,
    'BYTES_PER_ELEMENT': 4,
    'get': function get() {},
    'set': function set() {}
});
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-restricted-syntax, no-empty-function, no-unused-vars -->

<!-- eslint no-undef: "error" -->

```javascript
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
import isComplexTypedArrayLike from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-typed-array-like@deno/mod.js';

var bool;
var arr;

arr = {
    'BYTES_PER_ELEMENT': 8,
    'length': 10,
    'byteOffset': 0,
    'byteLength': 10,
    'get': function get() {},
    'set': function set() {}
};
bool = isComplexTypedArrayLike( arr );
// returns true

bool = isComplexTypedArrayLike( new Complex64Array( 4 ) );
// returns true

bool = isComplexTypedArrayLike( [] );
// returns false

bool = isComplexTypedArrayLike( {} );
// returns false

bool = isComplexTypedArrayLike( null );
// returns false

bool = isComplexTypedArrayLike( 'beep' );
// returns false

bool = isComplexTypedArrayLike( function foo( a, b ) {} );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-complex-like`][@stdlib/assert/is-complex-like]</span><span class="delimiter">: </span><span class="description">test if a value is a complex number-like object.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex-typed-array`][@stdlib/assert/is-complex-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a complex typed array.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex64array`][@stdlib/assert/is-complex64array]</span><span class="delimiter">: </span><span class="description">test if a value is a Complex64Array.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex128array`][@stdlib/assert/is-complex128array]</span><span class="delimiter">: </span><span class="description">test if a value is a Complex128Array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-complex-typed-array-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-complex-typed-array-like

[test-image]: https://github.com/stdlib-js/assert-is-complex-typed-array-like/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-complex-typed-array-like/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-complex-typed-array-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-complex-typed-array-like?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-complex-typed-array-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-complex-typed-array-like/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-complex-typed-array-like/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-complex-typed-array-like/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-complex-typed-array-like/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-complex-typed-array-like/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-complex-typed-array-like/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-complex-like]: https://github.com/stdlib-js/assert-is-complex-like/tree/deno

[@stdlib/assert/is-complex-typed-array]: https://github.com/stdlib-js/assert-is-complex-typed-array/tree/deno

[@stdlib/assert/is-complex64array]: https://github.com/stdlib-js/assert-is-complex64array/tree/deno

[@stdlib/assert/is-complex128array]: https://github.com/stdlib-js/assert-is-complex128array/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
