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


const letterPositions = function(sentence) {
const results = {};
for (i = 0; i < sentence.length; i++) {
if (sentence[i] !== " ") {
  if (!results[sentence[i]]) {
    results[sentence[i]] = [];
  } results[sentence[i]].push(i)
} 
}

return results;
}
console.log(letterPositions("hello there everyone in this planet"))
console.log(letterPositions("Hi there"));
assertArraysEqual(letterPositions("hello").e, [1]);