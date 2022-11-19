

// const countLetters = function(string) {
//   let results = {};

//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     if (letterCount[char]) {
//       letterCount[char] + 1;
//     }
//     letterCount[ch]++;
//   }
//   console.log(countLetters('Howdy'));
// };
// countLetters('Howdy');



const countLetters = function(str) {
  const results = {};
  for(const letter of str) {
    letter += 1
    // if(results[letter] === undefined)
    // results[letter]
  }
};
console.log(countLetters('Howdy'));
// }

// // console.log(countLetters('Howdy'));
// const letterCount = {};
// const countLetters = function(string) {
//   for (let i = 0; i < string.length; i++) {
//     let letter = string[i];
//     (countLetters[letter]) = 0; {
//       countLetters[letter]++;
//     }
//     console.log(countLetters);
//   }
// };
countLetters('Howdy');
countLetters('lighthouse in the house');