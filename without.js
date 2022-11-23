// const assertEqual = function (actual, expected) {
//   console.log(`${actual} === ${expected}`);
// };

// eqArrays([1, 2, 3], [1, 2, 3]) // => true

const assertEqual = function (arr0, arr1) {
  eqArrays([1, 2, 3], [1, 2, 3])
  console.log(`${arr0} === ${arr1}`);
};
const without = function (src, itemsToRemove) {
  const results = [];

  for (const item of src) {

    if (!itemsToRemove.includes(item)) {
      results.push(item);
  }
}
return results;
}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
