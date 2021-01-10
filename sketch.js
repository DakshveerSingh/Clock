var hrs = hour();
var min = minute();
var sec = second();
var hrAngle,minAngle,secAngle;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  angleMode(DEGREES);

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hrs,0,12,0,360);

// second hand
  push();
  ellipseMode(CENTER);
  translate(secAngle.x,secAngle.y);
  rotate(secAngle);
  stroke("red");
  strokeWeight(2);
  line(0,0,100,0);
  arc(0,0,100,100,0,0);
  pop();

// minute hand 
  push();
  ellipseMode(CENTER);
  translate(minAngle.x,minAngle.y);
  rotate(minAngle);
  stroke("blue");
  strokeWeight(2);
  line(0,0,100,0);
  arc(0,0,100,100,0,0);
  pop();

// hour hand
  push();
  ellipseMode(CENTER);
  translate(hrAngle.x,hrAngle.y);
  rotate(hrAngle);
  stroke("green");
  strokeWeight(2);
  line(0,0,100,0);
  arc(0,0,100,100,0,0);
  pop();

  drawSprites();
}