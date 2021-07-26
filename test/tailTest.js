const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail", () => {
it("returns 3 for [1, 2, 3]", () => {
  assert.strictEqual(tail([1, 2, 3]), 3);
});
it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
it("returns '7' for [4,5,6,7]", () => {
  assert.strictEqual(tail([4,5,6,"a","b",7]), 7);
});

});



  // Test Case 1: Check the returned array elements
  // const result = tail(["Hello", "Lighthouse", "Labs"]);
  // assertEqual(result.length, 2); // ensure we get back two elements
  // assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
  // assertEqual(result[1], "Labs"); // ensure second element is "Labs"

