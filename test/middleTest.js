const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')

assertArraysEqual(middle([1, 3, 5, 6, 3, 5, 6]), [6])
assertArraysEqual(middle([1, 3, 5, 6, 3, 5, 6]), [1])
assertArraysEqual(middle([1, 3, 5, 2, 3, 5, 6]), [2])
assertArraysEqual(middle([1, 3, 5, 6, 3, 5, 6]), [3])