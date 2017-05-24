$(document).ready(function() {
  window.dancers = [];
  window.dancersSouthpark = [];

  let tickSpeed = 500;

  $('.killKennyButton').on('click', function(event) {

    window.dancersSouthpark.forEach(dancerObj => {
      let kenny = dancerObj['kenny'].$node;
      dancerObj['cartman'].$node.animate({
        left: kenny.position().left + 50,
        top: kenny.position().top + 30
      }, 1000, () => {
        kenny.fadeOut(() => {
          kenny.top -= 250;
          kenny.attr('src' , 'img/kenny-angel.png');
          kenny.fadeIn(() => {
            kenny.animate({
              "top" : 0,
              "opacity" : 0
            }, 'slow');
          });
        });
      });
    });

  });

  $('.lineUpDancersButton').on('click', function() {

    let calculateLeft = function(left) {
      if(left >= $(window).width() - 200) {
        return 25;
      } else {
        return left;
      }
    };

    let top = 50,
      left = 25;
    window.dancersSouthpark.forEach(dancerObj =>  {
      dancerObj['cartman'].lineUp(left, top);
      left += 100;
      left = calculateLeft(left);
      if(left === 25) {
        top += 200;
      }

      dancerObj['kenny'].lineUp(left, top);
      left += 200;
      left = calculateLeft(left);
      if(left === 25) {
        top += 200;
      }

    });
  });

  $('.addDancerButton').on('click', function(event) {

    let makeObj = function(functionName) {
      return new window[functionName](
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
    };

    let cartman = makeObj('Cartman');
    cartman.$node.on('mouseover', (event) => {
      debugger
      event.target.hidden = true;
    });

    let kenny = makeObj('Kenny');


    $('body').append(cartman.$node, kenny.$node);

    window.dancersSouthpark.push({cartman : cartman, kenny : kenny});

  });

  $('.addBreakDancerButton').on('click', function(event) {
    debugger;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      ($(window).innerHeight() * Math.random()),
      ($(window).innerWidth() * Math.random()),
      tickSpeed
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});

