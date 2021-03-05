let fred,football,soccer;

function setup() {
  createCanvas(500, 500);
  fred = loadImage("assets/fred.jpg");
  football = loadImage("assets/football.jpg");
  soccer = loadImage("assets/soccer.jpg");
  imageMode(CENTER);
}

function draw() {
image(fred, width/2, height/2, 200,200);
image(football, width/2, height/2-200, 200,200);
image(soccer, width/2, height/2+200, 200,200);
}
