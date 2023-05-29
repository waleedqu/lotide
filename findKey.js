const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
  for (let key in object) {
if (callback(object[key])) {
  return key;
}
  }
}
