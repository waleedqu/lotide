const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};










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


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
