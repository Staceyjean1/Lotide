
const assertArraysEqual = require("'/assertEqual");

// const assertEqual = function (actual, expected) {
// //   if (actual === expected) {
// //     console.log('✅✅✅ Assertion Passed: ${actual} === ${expected}');
// //   } else {
// //     console.log('🔴🔴🔴Assertion Failed: ${actual} !== ${expected}');
// //   }
// // };
  
// // const eqArrays = function (firstArray, secondArray) {
// //   for (let i = 0; i < firstArray.length; i++) {
// //    if (firstArray[i] !== secondArray[i]) {
// //     return false;
// //    }
// //   return true;
// //   }
// }
const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2)
  const middleTwo = array.length % 2 
  if (array.length < 3)
    return []

  if (middleTwo === 1)
  return [array [middleIndex]]
    
 if (middleTwo === 0)
 return [array [middleIndex -1], array [middleIndex]]
}



module.exports = middle;