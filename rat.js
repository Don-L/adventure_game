var Rat = function() {
  this.alive = true;
  this.touch = function(food) {
    food.touched();
  }
  this.kill = function() {
    this.alive = false;
  }
}











module.exports = Rat;