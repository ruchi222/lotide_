const withOut = function(source, itemsToRemove) {
    let newArray = [source];
    for (let i = 0; i <= newArray.length; i++) {
        for (value of itemsToRemove) {
            if (source[i] === value) {
                let removedItem = newArray.indexOf(value);
                newArray.splice(removedItem, 1);
            }
        }
    }
    return newArray;
};

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

//Test Code

withOut([1, 2, 3], [1]) // => [2, 3]
withOut(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
withOut(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);