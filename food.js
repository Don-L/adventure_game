var Food = function(name, value, poisoned){
  this.name = name;
  this.value = value;
  this.poisoned = false;
}

Food.prototype = {
  touched: function() {
    this.poisoned = true;
  }
}

module.exports = Food;