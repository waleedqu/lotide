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



const middle = function(array) {
  let result = [];

  // Empty array for less than 3 elements
  if (array.length < 3) {
    return [];
  }
  // checking if it's an even number of elements
  else if (array.length % 2 === 0) {
    result.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  // for odd number of elements
  else {
    result.push(array[Math.floor(array.length / 2)]);
  }
  
  return result;
}

