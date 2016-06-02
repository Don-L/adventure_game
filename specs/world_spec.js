var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var World = require('../world');

var assert = require('chai').assert;                                         

describe('game world', function() {

    it('should be created with an empty heroes array', function() {
      world = new World('Game World');
      assert.equal(0, world.heroes.length);

    });

    it('should have a name', function() {

      world = new World('Game World');
      assert.equal('Game World', world.name);
    });

    it('should be created with an empty rats array', function() {
      world = new World('Game World');
      assert.equal(0, world.rats.length);

    });

    it('should be created with an empty food array', function() {
      world = new World('Game World');
      assert.equal(0, world.rats.length);
    })




















  })