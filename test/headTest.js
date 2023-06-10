
const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1)
  });
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5)
  });
  it("returns hello for [hello, lighthouse, labs]", () => {
    assert.strictEqual(head(["hello", "Lighthouse", "Labs"]), "hello")
  });
  it("returns undefined when theres no arguments", () => {
    assert.strictEqual(head(), undefined)
  })
});