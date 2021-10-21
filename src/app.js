const R = require('ramda');

let result = R.reduce(
  (acc, x) =>
    R.compose(R.flip(R.prepend)(acc), R.sum, R.map(R.add(1)))([x, ...acc]),
  [0]
)([13, 28]);
console.log(result);
