// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  // debugger;
  console.log($('.bg').height());
  console.log($('.bg').width());
  console.log(top);
  console.log(left);
  this.$node = $('<span class="dancer"></span>');
  // this.$node = $('<img src="img/cartman.png"/>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //() => {this.step();} 
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function(left, top) { // expects a jquery element

  this.$node.animate({
    //opacity: 0.5,
    left: left,
    top: top
    // height: "toggle"
  }, 3000, function() {
    // Animation complete.
  });

};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


