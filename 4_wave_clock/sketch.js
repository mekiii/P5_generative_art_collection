let radius;
let centerY;
let angle;
let lastX, lastY;
let radiusNoise = 0.2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
  angle = 0

  // put setup code here
  radius = 5;
  background(244,254,200);
  lastX = -999;
  lastY = -999;
  colorMode(RGB, 255, 255, 255, 1);
  strokeWeight(1);
  stroke(7,46,103,0.5)
}


function draw() {
  background(244,254,200,0.001);
  radiusNoise += 0.01;
  radius = noise(radiusNoise)*550 + 1;
  angle += noise(radiusNoise)*6 - 3;
  let rad = radians(angle);
  let x1 = centerX + radius * cos(rad);
  let y1 = centerY + radius * sin(rad);
  let oppositeRad = rad + PI;
  let x2 = centerX + radius * cos(oppositeRad);
  let y2 = centerY + radius * sin(oppositeRad);
  line(x1,y1,x2,y2);
  
}

function drawSpiral(){
  let x, y;
    let rad = radians(angle);
    x = centerX + radius * cos(rad)*random(0.7,1.2);
    y = centerY + radius * sin(rad)*random(0.7,1.2);
    if (lastX > -999) {
      line(x, y, lastX, lastY);
    }
    lastX = x;
    lastY = y;
    radiusNoise += 0.05;
    radius += noise(radiusNoise) * 5;
    angle += 50;
}