var Rat = require('../rat');
var Food = require('../food');
var assert = require('chai').assert;                                         

describe('a rat', function() {



  it('should be able to poison food', function() {
    rat = new Rat;
    food = new Food('After Eights', 30, false);
    rat.touch(food);
    assert.equal(true, food.poisoned);
  })

  it('should be alive when created', function() {
    rat = new Rat;
    assert.equal(true, rat.alive);
  })

  it('should be dead when killed', function() {
    rat = new Rat;
    rat.kill();
    assert.equal(false, rat.alive);
  })

  
})