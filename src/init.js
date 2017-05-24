$(document).ready(function() {
  window.dancers = [];
  window.dancersSouthpark = [];

  let tickSpeed = 500;

  let offset = 0;
  let topCircle = $('.top-circle');

  $('.lineUpDancersButton').on('click', function(event) {
    let top = 25,
      left = 25;
    window.dancersSouthpark.forEach(dancerObj =>  {
      dancerObj['cartman'].lineUp(left, top);
      left += 100;
      dancerObj['kenny'].lineUp(left, top);
      left += 200;

    });
  });

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
      // make a dancer with a random position
    let makeObj = function(functionName) {
      return new window[functionName](
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );
    };

    let cartman = makeObj('Cartman');
    let kenny = makeObj('Kenny');

    $('body').append(cartman.$node, kenny.$node);

    window.dancersSouthpark.push({cartman : cartman, kenny : kenny});

  });

  $('.addBreakDancerButton').on('click', function(event) {
    if(window.dancers.length > 11) {
      alert("There are no more BreakDancers to Server You.");
    } else {
      var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

      // get the maker function for the kind of dancer we're supposed to make
      var dancerMakerFunction = window[dancerMakerFunctionName];

      // make a dancer with a random position
      var dancer = new dancerMakerFunction(
        380 + (Math.random() * 120),
        window.dancers.length * 90,
        tickSpeed
      );
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
    }
  });

  $('.lineUpBreakDancersButton').on('click', function(event) {
    let top = 500;
    let left = 0;
    window.dancers.forEach(dancer =>  {
      dancer.lineUp(left, top);
      left += 90;
    });
  });

});

