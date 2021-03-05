let fakehope, goodmood,ka1;
function setup() {
  createCanvas(500, 500);
  fakehope= loadFont("assets/FakeHope.ttf");
  goodmood= loadFont("assets/GoodMood.ttf");
  ka1= loadFont("assets/ka1.ttf");
  textSize(24);
  textAlign(CENTER);
}

function draw() {
  background(100);
textFont(fakehope);
text("Hi my name is Freddy",width/2, height/2);
textFont(goodmood);
text("I go to Illinois State University", width/2, height/2 -30 );
textFont(ka1);
text("I enjoy making videos", width/2, height/2 +30)
}
