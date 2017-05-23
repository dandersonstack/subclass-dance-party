var Kenny = function(top, left, timeBetweenSteps) {
  //this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="img/kenny.png" class="kenny"/>');
  this.setPosition(top,left);

};

Kenny.prototype = Object.create(Dancer.prototype);
Kenny.prototype.constructor = BlinkyDancer;

Kenny.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.oldStep();
  // this.$node.toggle();
};
