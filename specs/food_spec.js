var Food = require('../food');
var assert = require('chai').assert;                                         

describe('food', function() {



  it('should have a name', function() {
    food = new Food('Chicken');
    assert.equal('Chicken', food.name);
  })

  it('should have a value', function() {
    food = new Food('Chicken', 25);
    assert.equal(25, food.value);
  })


  
})