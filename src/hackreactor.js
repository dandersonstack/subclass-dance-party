var loopAudio = new Audio('tracks/mainTrack.wav');
var BEAT_TIME = (60 / 143.1) * 1000;

let getRandomColor = function() {
  hue = Math.floor(Math.random() * 360);
  return 'hsl(' + hue + ', 100%, 50%)';
};

let getRandomColorDark = function() {
  hue = Math.floor(Math.random() * 360);
  return "hsl(" + hue + ", 100%, 25%)";
};

let getRandomSize = function() {
  var WIGGLE = window.screen.availHeight * window.screen.availWidth / 100000;
  size = Math.floor(Math.random() * 200);
  return size + 'px';
};

let fadeDivIn = function(){
  $('.bg').animate({ backgroundColor: getRandomColor() }, 2000, function() { fadeDivOut();});
};

let fadeDivOut = function(){
  $('.bg').animate({ backgroundColor: getRandomColorDark() }, 2000, function() { fadeDivIn();});
};

fadeDivIn();
loopAudio.load();
loopAudio.play();







