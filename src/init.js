$(document).ready(function() {
  window.dancers = [];

  let tickSpeed = 500;

  let offset = 0;
  let topCircle = $('.top-circle');

  $('.lineUpDancersButton').on('click', function(event) {
    window.dancers.forEach(dancer =>  {

      // debugger;
      let position = $('#hackReactor-name').position();
      dancer.lineUp(position.left + offset, position.top + 5);
      offset += 55;
    });
  });
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      ($(".bg").innerheight() * Math.random()),
      ($(".bg").width() * Math.random()),
      tickSpeed
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
  $('.addBreakDancerButton').on('click', function(event) {
    // debugger;
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

