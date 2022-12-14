const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ${actual} === ${expected}');
  } else {
      console.log('🔴🔴🔴Assertion Failed: ${actual} !== ${expected}');
  }
  const eqArrays = function(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
    }
    return true;
  };
  
  const eqObjects = function(object1, object2){
    if (Object.keys(object1).length === Object.keys(object2).length){
      for(let key of Object.keys(object1) ){
          if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
              if (!eqArrays(object1[key],object2[key])){
               return false;       
              }
          }
          
      }
      return true;
  }
  return false; 
  }
  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // <= add this line
    if (actual !== expected) {
      console.log('🔴🔴🔴'Assertion Failed!) {
      } else
    }
  };
 