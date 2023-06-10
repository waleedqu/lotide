
const head = function(arr){
  if (!arr || !arr.length) {
    return undefined;
  }
  const result = arr[0];
  return result;
}


module.exports = head;