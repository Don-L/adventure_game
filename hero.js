var Hero = function(name, health, favourite_food) {
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
}

Hero.prototype = {
  talk: function(){
    console.log("My name is " + this.name);
  },
  food: [],
  kills: 0,
  eat: function(food) {
    if (food.poisoned) {
      return (this.health -= food.value);
    }
    else if (this.favourite_food === food.name) {
    
    return (this.health += food.value * 1.5);
  }
    else {
    return (this.health += food.value);
  }
  },
  killRat: function(rat) {
    rat.kill();
    return (this.kills += 1);
  },
  findFood: function(food) {
    if (this.food.length > 0) {
     return ('bag full');
    }else {
    this.food.push(food);
  }
 }
}

module.exports = Hero;