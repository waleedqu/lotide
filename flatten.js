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

const flatten = function(arr) {
  let flatArray = [];
  for (let x = 0; x < arr.length; x++) {
if (Array.isArray(arr[x])) {
  for (let y = 0; y < arr[x].length; y++) {
    flatArray.push(arr[x][y]);
  } 
} else {
  flatArray.push(arr[x]);
}
  } return flatArray;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]))
console.log(flatten([1, 3, 4, 3, 5, 6, 4, 3, 6, [3, 4, 4, 6, 7, 8]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);