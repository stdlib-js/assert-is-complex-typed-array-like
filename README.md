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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is complex-typed-array-like.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-complex-typed-array-like
```

</section>

<section class="usage">

## Usage

```javascript
var isComplexTypedArrayLike = require( '@stdlib/assert-is-complex-typed-array-like' );
```

#### isComplexTypedArrayLike( value )

Tests if a value is complex-typed-array-like.

<!-- eslint-disable no-restricted-syntax, no-empty-function -->

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );

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
var Complex64Array = require( '@stdlib/array-complex64' );
var isComplexTypedArrayLike = require( '@stdlib/assert-is-complex-typed-array-like' );

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


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-complex-typed-array-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-complex-typed-array-like

[test-image]: https://github.com/stdlib-js/assert-is-complex-typed-array-like/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-complex-typed-array-like/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-complex-typed-array-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-complex-typed-array-like?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-complex-typed-array-like
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-complex-typed-array-like/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-complex-typed-array-like/main/LICENSE

</section>

<!-- /.links -->
