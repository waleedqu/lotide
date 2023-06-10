
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

module.exports = flatten;