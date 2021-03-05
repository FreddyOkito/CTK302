let so;

function preload() {
  so = loadSound("assets/SOL.mp3");

}

function setup() {
  createCanvas(500, 500);
  so.play();
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
