const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  // for (const [letter,index] of sentence.split('')) {
    sentence.split('').forEach((letter, index) => {
      if (letter !== ' ') {
        if (results[letter]) {
        results[letter].push(index)
        } else {
          results[letter] = [index]     }
      }
    });    

    
  
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("lighthouse in the house"));