const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
/* old version
const countLetters = function(string) {
  const letterCounts = {};
  for (let x = 0; x < string.length; x++) {
  let count = 0;
  for (let y = 0; y < string.length; y++) {
if (string[x] === string[y] && x > y) {
  break;
}
   if (string[x] === string [y] && string[x] !== " ") {
    count++;
  }
  } if (count > 0)
 letterCounts[string[x]] = count;
} console.log(letterCounts);
return letterCounts;
}
countLetters("Hi there everyone")


const countLetters = function(string) {
  const letterCounts = {};
  const arr = string.toLowerCase().split("");
  for (const letter of arr) {
    if (letter !== " ") {
      // refactored with ternary operator
      // if (letterCounts[letter]) {
      //   letterCounts[letter]++;
      // } else {
      //   letterCounts[letter] = 1;
      // }
      letterCounts[letter] ? letterCounts[letter]++ : letterCounts[letter] = 1
    } 
  } 
  return letterCounts;

}
console.log(countLetters("Hi there everyone"));
*/

const countLetters = function(string) {
  const letterCounts = {};
  const arr = string.toLowerCase().split("");
  for (const letter of arr) {
    if (letter !== " ") {
      letterCounts[letter] ? letterCounts[letter]++ : letterCounts[letter] = 1;
    } 
  } 
  return letterCounts;

};
console.log(countLetters("Hi there everyone"));