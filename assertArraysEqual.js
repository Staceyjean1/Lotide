const assertEqual = require('./assertEqual')
const assertArraysEqual = require('./assertArraysEqual')

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    
//   }
// };


// const assertArraysEqual = function(array1, array2) {
//   if (array1 === array2) {
//     console.log('✅✅✅  Arrays are same : [${array1}] === [${array2}]');
//   } else {
//     console.log('🔴🔴🔴  Arrays are not same : [${array1}] !== [${array2}]');
//   }
// }
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(2, 4);
assertArraysEqual("Lighthouse Labs", "Lighthouse Labs");
assertArraysEqual(1, 2);

module.exports = assertArraysEqual;