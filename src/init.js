$(document).ready(function() {
  window.dancers = [];

  let offset = 0;
  $('.lineUpDancersButton').on('click', function(event) {
    let top = 25,
      left = 25;
    window.dancers.forEach(dancerObj =>  {
      dancerObj['cartman'].lineUp(left, top);
      left += 100;
      dancerObj['kenny'].lineUp(left, top);
      left += 200;

    });
  });
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // var dancerMakerFunctionNames = $(this).data('dancer-maker-function-name').replace(/\s/g,'');
    // let functionNameArray = dancerMakerFunctionNames.split(',');
    //
    // functionNameArray.forEach(functionName => {

      // get the maker function for the kind of dancer we're supposed to make
      // var dancerMakerFunction = window[functionName];

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

    window.dancers.push({cartman : cartman, kenny : kenny});

    // });
  });
});

