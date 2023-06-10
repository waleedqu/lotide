
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


module.exports = middle;