let arrowlength = 100;
let startpoint, endpoint;
let number;
let radius;
let rad;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  // put setup code here
  number = 70;

  colorMode(RGB, 255, 255, 255, 1);
  stroke(24, 202, 230, 0);
  strokeWeight(1);
  fill(0,0,0,0.2);
  blendMode(OVERLAY);
  radius = 1000;
  rad = 0;
}

let counter = 0;



function draw() {

  background(0, 0, 0, 0.9);
  counter += 0.01;
  for (let i = 0; i <= number; i++) {
    radius = 5 //noise(counter) * 15;
    rad += 0.02;
    let speed = i/number 
    let angle = radians(rad);
    //push();

    rotateZ(PI/number);
    beginShape();
    //---------------start
    curveVertex(0, -windowHeight / 2 + 20, 0);
    curveVertex(0, -windowHeight / 2 + 20, 0);
    //---------------middle shit
    //curveVertex(-noise(counter) * radius * 2 * i * sin(angle * speed), -200 * noise(counter), radius * i * cos(angle * speed));
    //vertex(-noise(counter) * radius * 1.7 * i * sin(angle * speed), -100 * noise(counter), radius * i * cos(angle * speed));
    //vertex(-radius * i * sin(angle * speed), 0, radius * i * cos(angle * speed));
    //curveVertex(radius * i * cos(angle + speed), +200 * noise(counter), radius * i * sin(angle + speed));
    curveVertex(-radius * i * sin(angle * speed), 100, radius * i * cos(angle * speed));
    //---------------end
    curveVertex(0, windowHeight / 2 - 20, 0);
    curveVertex(0, windowHeight / 2 - 20, 0);
    endShape();
    //pop();
  }

}
// put drawing code here


function drawArrow(x, y, length, angle) {
  push();
  translate(x, y);
  rotate(radians(angle));
  line(0, 0, length, 0)
  triangle(length - 5, -3, length - 5, 3, length, 0);
  pop();
}