let state = 0 ;
let song1, song2, song3 ;

function preload(){
  song1 = loadSound('assets/Soke.mp3')
  song2 = loadSound('assets/Pami.mp3')
  song3 = loadSound('assets/Toxic.mp3')
}

function setup() {
  createCanvas(400, 400);

  song1.loop();
  song1.pause();
  song2.loop();
  song2.pause();
  song3.loop();
  song3.pause();
}

function draw() {
  switch (state)

  case 0:
  background (100)
  text ("state " , 100, 100);
  break;

  case 1:
  background ('red')
  text ("state 1 " , 100, 100);
  break;

  case 2:
  background ('blue')
  text ("state 2 " , 100, 100);
  break;

  case 3:
  background ('yellow')
  text ("state " , 100, 100);
  break;

  case 4:
  background ('green')
  text ("state " , 100, 100);
  break;


 }
}

function mouseReleased() {
  state = state + 1;
}
