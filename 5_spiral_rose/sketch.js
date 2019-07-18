let center;
let radius = 10;
let particles = []; 
class particle {
  constructor(prePosition, angle, radius) {
    this.prePosition = prePosition;
    this.angle = radians(angle);
    this.radius = radius;
    this.center = createVector(windowWidth/2,windowHeight/2);
    this.position = this.calcPosition();
    this.tempPosition = createVector(this.prePosition.x, this.prePosition.y);
    this.lerpCounter = 0;
    this.lerpStep = 0.2;

  }

  calcPosition () {
    let x = this.center.x + this.radius*sin(this.angle);
    let y = this.center.y + this.radius*cos(this.angle);
    return createVector(x,y)
  }

  draw() {
    stroke(51,95,235,0.5);
    strokeWeight(1);
    noFill();
    //fill(51,95,235,0.01);
    if (abs(this.tempPosition.x - this.position.x) > 0.001) {
      this.tempPosition.x = lerp(this.prePosition.x, this.position.x, this.lerpCounter);
      this.tempPosition.y = lerp(this.prePosition.y, this.position.y, this.lerpCounter);
      ellipse(this.tempPosition.x, this.tempPosition.y, this.radius,this.radius);
      this.lerpCounter += this.lerpStep;
    }

  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  center = createVector(windowWidth/2, windowHeight/2);
  blendMode(DIFFERENCE);
  colorMode(RGB, 255, 255, 255, 1);
  background(245,232,191,1);
  for (let i = 0; i < 600; i++) {
    if (i == 0){
      particles.push(new particle(center, 1,1))
    }
    else {
      let prePosition = particles[i-1].position;
      particles.push(new particle(prePosition, 10*i,sin(0.075*i)*350 + 0.5*i));
    }
  }
  // put setup code here
}

let element = 0;
function draw() {
  if (element < particles.length) {
    particles[element].draw();
    if (particles[element].lerpCounter >= 1) {
      element++;
    }
  }
}