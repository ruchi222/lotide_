const assertArraysEqual = function (array1,array2) {
    if (eqArrays(array1, array2)) {
        console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
    }
}


const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
    }
    return true;
};

// ACTUAL FUNCTION
const middle = function(array) {
    if (array.length <= 2) {
        return [];
    } else if (array.length % 2 === 0) {
        let firstMiddle = array[(array.length / 2) - 1]
        let secondMiddle = array[(array.length / 2)]
        return [firstMiddle, secondMiddle];
    } else {
        let middle = array[Math.floor(array.length / 2)];
        return [middle];
    }
        
}

module.exports = middle;
