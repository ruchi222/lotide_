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


const takeUntil = function(array, callback) {
    for (let index = 0; index < array.length; index++) {
        if (callback(array[index])) {
            return array.slice(0, index);
        }
    }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

assertArraysEqual(results1, [1,2,5,7,2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
