const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};
const letterCount = {};
const countLetters = function (string) {
  const results = {};
  for (const letter of string) {
    if (letter === ' ') continue
    if (results[letter]) {
      results[letter]++
    }
    else {
      results[letter] = 1
    }
  }
  return results
}
console.log(countLetters('lighthouse in the house'));