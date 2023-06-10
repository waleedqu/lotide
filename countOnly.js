
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
let results = {};
for (let i = 0; i < allItems.length; i++) {
let name = allItems[i];
if (itemsToCount[name] === true) {
if (results[name] === undefined) {
  results[name] = 1;
} else {
  results[name]++;
} 
}

} return results;

}

module.exports = countOnly;