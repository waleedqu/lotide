
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 6 for [1, 3, 5, 6, 3, 5, 6]", () => {
  assert.deepEqual(middle([1, 3, 5, 6, 3, 5, 6]), [6])
  });
  it("returns 2 for [1, 3, 5, 2, 3, 5, 6]", () => {
    assert.deepEqual(middle([1, 3, 5, 2, 3, 5, 6]), [2])
  })
});