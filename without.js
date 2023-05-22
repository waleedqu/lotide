const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
}
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`)
  } else if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`)
  }
  }

let newArray = [];
const without = function(source, itemsToRemove) {
newArray = source.filter(item => !itemsToRemove.includes(item));
return newArray;
}
console.log(without([1, 2, 3], [1]));
console.log(without(["john", "bob"], ["john"]));
console.log(without([1, 2, 3], [1, 3]));
assertArraysEqual(without([1, 2, 3], [1, 3]), [2]);
const words = ["hello", "world", "labs"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "labs"]);