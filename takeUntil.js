// const assertEqual = require('./assertEqual');
const eqArrays = function(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  };


  
const takeUntil = function (array, callback) {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
    return results;
  }
  results.push(item);
}
  return results;
};
// const myCallback = function(x) {
//   return x > 3
// };

// let result = takeUntil([1, 2, 3, 4, 5]), myCallback);
// console.log(result);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


