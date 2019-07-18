let arrowlength = 100;
let startpoint, endpoint;
let number;
let radius;
let rad;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/breathing.mp3');
}

function togglePlay() {
  if (mySound.isPlaying()) {
    mySound.loop();
  } else {
    mySound.pause();
  }
}


function setup() {
  frameRate(60);
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  mySound.loop();
  fft = new p5.FFT();
  background(0);

  // put setup code here
  number = 80;

  colorMode(RGB, 255, 255, 255, 1);
  stroke(24, 202, 230, 0.5);
  strokeWeight(1);
  //fill(0,0,0,0.1);
  noFill()
  blendMode(OVERLAY);
  radius = 1000;
  rad = 0;
}

let counter = 0;



function draw() {
  waveform = fft.waveform();

  background(0, 0, 0, 0.9);
  counter += 0.01;
  for (let i = 0; i <= number; i++) {
    radius = 350 //noise(counter) * 15;
    rad += 0.03;
    let speed = i/(number*5);
    let angle = radians(rad);
    push();

    rotateZ(PI/8);
    rotateX(-PI/16);
    beginShape();
    //---------------start
    curveVertex(0, - windowHeight / 2 + 100, 0);
    curveVertex(0, - windowHeight / 2 + 100, 0);
    //---------------middle shit
    curveVertex(radius*sin(angle* speed),  50*sin(angle+waveform[i*3]*0.5) + 100 , radius * cos(angle * speed));

    //---------------end
    curveVertex(0, windowHeight / 2 - 200, 0);
    curveVertex(0, windowHeight / 2 - 200, 0);
    endShape();
    pop();
    
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