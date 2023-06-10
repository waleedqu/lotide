
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [4, 5, 6] for [3, 4, 5, 6]", () => {
    assert.deepEqual(tail([3, 4, 5, 6]), [4, 5, 6]);
  });
  it("returns [1, 2, 3] for [2, 1, 2, 3]", () => {
    assert.deepEqual(tail([2, 1, 2, 3]), [1, 2, 3]);
  });
})