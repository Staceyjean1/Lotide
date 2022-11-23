const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    
  }
};


const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log('✅✅✅  Arrays are same : [${array1}] === [${array2}]');
  } else {
    console.log('🔴🔴🔴  Arrays are not same : [${array1}] !== [${array2}]');
  }
}


const words = ["ground", "control", "to", "major", "tom"];
const results = words.map((words) => words [0]);
// const map = function (array, callback) {
// const results1 = map(words, word => word[0]);
// }
assertArraysEqual(results,["g","c","t","m","t"] );

// const map = function(array, callback) {
//   console.log(array, array);
//   const words = ["ground", "control", "to", "major", "tom"];
// console.log(callback, callback);