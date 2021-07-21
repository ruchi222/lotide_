
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
};

let phrase = "lighthouse in the house";

const countLetters = function (string) {
    let total = {};
    // run for loop to initialize object with 'number' types
    for (let letter of string) {
        total[letter] = 0;
    }
    // run loop second time to increment values
    for (let letter of string) {
        total[letter]++;
    }
    // remove spaces
    delete total[" "];
    return total;  
}
console.log(countLetters(phrase));