const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
};

const findKeyByValue = function (object, value) {
    // console.log(Object.keys(object));
    for (let key of Object.keys(object)) {
        // console.log("new iteration and comparing")
        // console.log(object[key]);
        // console.log(value);
        if (value === object[key]) {
            // console.log("returning key", key)
            return key;
        }
    }
    
}

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

  