var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var assert = require('chai').assert;                                         

describe('a hero', function() {



  it('should have a name', function() {
    hero = new Hero('Zed');
    assert.equal('Zed', hero.name);
  })

  it('should have health', function() {
    hero = new Hero('Zed', 100);
    assert.equal(100, hero.health);
  })

  it('should have a favourite_food', function() {
    hero = new Hero('Zed', 100, 'Chicken');
    assert.equal('Chicken', hero.favourite_food);
  })

  it('should be able to say its name', function() {
    hero = new Hero('Zed', 100, 'Chicken');
    hero.talk();
  })

  it("should start with no food", function(){
    hero = new Hero('Zed', 100, 'Chicken');
    assert.deepEqual([], hero.food);
  })

  it('should be able to eat favourite food and its health should go up', function(){
    hero = new Hero('Zed', 100, 'Chicken');
    food = new Food('Chicken', 25);
    hero.eat(food);
    assert.equal(137.5, hero.health);
  })

  it('should be able to eat food and its health should go up', function(){
    hero = new Hero('Zed', 100, 'Chicken');
    food = new Food('Banana', 25);
    hero.eat(food);
    assert.equal(125, hero.health);

  })
  
  it('should lose health after eating poisoned food', function(){
    hero = new Hero('Zed', 100, 'Chicken');
    food = new Food('After Eights', 30);
    rat = new Rat();
    rat.touch(food);
    hero.eat(food);
    assert.equal(70, hero.health);
  })

  it('should gain a kill point for killing a rat', function(){
    hero = new Hero('Zed', 100, 'Chicken');
    rat = new Rat();
    hero.killRat(rat);
    assert.equal(1, hero.kills);
  })

  it('should be able to find food and add it to its bag', function() {
    hero = new Hero('Zed', 100, 'Chicken');
    food = new Food('After Eights', 30);
    hero.findFood(food);
    assert.equal(food, hero.food[0]);

  })




















})