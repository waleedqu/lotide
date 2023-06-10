
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

module.exports = countLetters;