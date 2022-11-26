const assert = require('chai').assert;
const tail   = require('../tail');
describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 2, 3);
  });
  it("returns '6, 7 ' for ['5, 6, 7']", () => {
    assert.strictEqual(tail(['5, 6, 7']), '6, 7'); 
  })
});


