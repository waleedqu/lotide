const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
}

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
if (eqObjects(actual, expected) === false) {
  console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
} else if (eqObjects(actual, expected) === true) {
  console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
}
}

