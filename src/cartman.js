var Cartman = function(top, left, timeBetweenSteps) {
  //this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="img/cartman.png"/>');
  this.setPosition(top,left);
};

Cartman.prototype = Object.create(Dancer.prototype);
Cartman.prototype.constructor = BlinkyDancer;

Cartman.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.oldStep();
  // this.$node.toggle();
};