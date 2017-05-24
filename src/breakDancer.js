var BreakDancer = function(top, left, timeBetweenSteps) {
  //this.oldStep = Dancer.prototype.step;
  this.images = ['img/dancers-even-1.png', 'img/dancers-odd-1.png','img/dancers-even-2.png',
    'img/dancers-odd-2.png', 'img/dancers-even-3.png', 'img/dancers-odd-3.png',
    'img/dancers-even-4.png', 'img/dancers-odd-4.png', 'img/dancers-even-5.png',
    'img/dancers-odd-5.png', 'img/dancers-even-6.png', 'img/dancers-odd-6.png',
    'img/dancers-even-7.png', 'img/dancers-even-8.png', 'img/dancers-even-9.png',
    'img/dancers-even-10.png', 'img/dancers-even-12.png'];

  this.currImage = 0;
  Dancer.call(this, top, left, timeBetweenSteps);  
  this.$node = $('<img src="' + this.images[this.currImage] + '"/>');
  this.setPosition(top, left);
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.switchImage();
};

BreakDancer.prototype.switchImage = function() {
  //this.$node.find(this.images[this.currImage]).toggle();​
  this.currImage = (this.currImage + 1) % 18;
  this.$node.attr("src",this.images[this.currImage]);
  //this.$node = $('<img src="' + this.images[this.currImage] + '"/>');
};

BreakDancer.prototype.lineUp = function(left, top) { // expects a jquery element

  this.$node.animate({
    // opacity: 0.25,
    left: left,
    top: top
    // height: "toggle"
  }, 2000, () => {
    console.log("about to try to make something be still here");
  });

};




