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

const letterPositions = function(sentence) {
    const results = {};
    for (letters of sentence) {
        results[letters] = [];
    }
    for (let b in results)
    {
        for (let a = 0; a < sentence.length; a++)
        {
            if (b === sentence[a])
            {
                results[b].push(a);
            }
        }
    }
    return results;
  };


assertArraysEqual(letterPositions("hello").e, [1]);
