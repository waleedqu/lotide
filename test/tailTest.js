const assertEqual = require('../assertEqual')
const tail = require('../tail')

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const word = ["hi"];
console.log(tail(word));
assertEqual(word.length, 1);

const empty = [];
console.log(tail(empty));
assertEqual(empty.length, 0);