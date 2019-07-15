let c = 10;
let n = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255, 255, 255, 1);
  angleMode(DEGREES);
  background(50, 97, 82);
  frameRate(20);
  // put setup code here
}

function draw() {
  noStroke()
  let a = n * 137.5;
  let r = c * sqrt(n);
  let x = r * cos(a)
  let y = r * sin(a)
  fill(242, 242, 205, (r*c%100)/100)
  push()
  translate(x + windowWidth/2, y + windowHeight/2,0)
  ellipse(0,0,5,5)
  pop()
  // put drawing code here
  n++;
}