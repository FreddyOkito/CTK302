let so;

function preload() {
  so = loadSound("assets/SOL.mp3");

}

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200);

}

function mouseReleased() {

  if (so.isPlaying()) {
    so.pause();
  } else {
    so.loop();
  }

}
// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
