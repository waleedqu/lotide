const without = function(source, itemsToRemove) {
  let newArray = [];
newArray = source.filter(item => !itemsToRemove.includes(item));
return newArray;
}

module.exports = without;