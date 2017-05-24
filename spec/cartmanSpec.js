describe('Cartman', function() {
  let cartman,
    timeBetweenSteps = 100;

  beforeEach(function () {
    cartman = new Cartman(10, 20, timeBetweenSteps);
  });

  it('should make cartman objects and put on page', function () {

    $('body').append(cartman.$node);
    expect($('.cartman').length).to.equal(1);
  });

  it('should move cartman when setting position', function () {
    let position = cartman.$node.position().top;
    cartman.setPosition(0,0);

    expect(cartman.$node.position().top).to.equal(0);
  });

});
