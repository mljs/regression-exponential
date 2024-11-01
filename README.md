# regression-exponential

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

Exponential Regression.

## Installation

`$ npm i ml-regression-exponential`

## Usage

This calculates parameters A and B for the equation `y = B * e^(A * x)`.

```js
import { ExponentialRegression } from 'ml-regression-exponential';

const x = [0, 1, 2, 3, 4];
const y = [1.5, 2.5, 3.5, 5.0, 7.5];

const regression = new ExponentialRegression(x, y);

regression.A; // 0.391202
regression.B; // 1.579909
regression.predict(2); // 3.454825
regression.toString(3); // f(x) = 1.58 * exp(0.391 * x)
```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-regression-exponential.svg
[npm-url]: https://npmjs.org/package/ml-regression-exponential
[ci-image]: https://github.com/mljs/regression-exponential/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/mljs/regression-exponential/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/ml-regression-exponential.svg
[download-url]: https://npmjs.org/package/ml-regression-exponential
