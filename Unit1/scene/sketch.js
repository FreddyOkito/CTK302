function setup() {
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);

}



function draw() {

  background(100);
  fill("yellow")
  ellipse(276, 56, 100, 100)
   //grass
    fill(73, 130, 93);
    rect(0, 570, 1280, 150);
  //cloud
  fill('white')
  ellipse(550,50,60,50);
  ellipse(580,40,60,50);
  ellipse(630,50,60,50);
  ellipse(570,70,60,50);
  ellipse(610,65,60,50);

  //tree 1
  fill(120, 51, 8);
  quad(93, 535, 13, 545, 54, 193, 92, 190);
  quad(91, 528, 141, 546, 123, 565, 56, 539);
  quad(91, 328, 168, 267, 161, 246, 88, 307);
  quad(161, 271, 228, 261, 222, 241, 164, 249);
  quad(36, 354, 0, 323, 0, 297, 38, 341);
  quad(18, 536, 0, 553, 0, 574, 43, 542);

  //leaves tree 1
  fill(39, 102, 55);
  ellipse(183, 243, 170, 55);
  ellipse(0, 292, 150, 55);
  ellipse(43, 213, 190, 70);
  ellipse(88, 156, 144, 55);





  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed

  } else {
    // when the mouse isn't pressed!

  }



  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);

}






// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
