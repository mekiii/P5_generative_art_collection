let yDist;
let xDist
let startingPoint;
let isFirstCollatz;
let withText;
let counter;
let tSize;
let followers = [];
let yDistOdd;
let xDistOdd;

class collatzFollower {
  constructor(predecessor, prePos, radius, angle) {
    this.sprePos = prePos;
    this.even = 2 * predecessor;
    this.position = {};
    this.radius = radius;
    this.angle = radians(angle);
    this.x = 0;
    this.y = 0;
    this.center = createVector(windowWidth/2, windowHeight/2);
    this.position.even = this.calcPosition(false, prePos);
    this.hasOddFollower;
    //Check if there's an odd number following
    if (predecessor % 3 == 1 && predecessor % 2 == 0) {
      yDistOdd += 3;
      xDistOdd += 5;
      this.odd = (predecessor - 1) / 3;
      this.position.odd = this.calcPosition(true, prePos);
      this.hasOddFollower = true;
    } else {
      this.hasOddFollower = false;
    }
    this.tempPos = createVector(this.sprePos.x, this.sprePos.y);
    this.lerpCounter = 0;
    this.lerpStep = 0.2;
  }

  calcPosition(isOdd, sprePos) {
    if (isOdd) {
      this.x = 1.2*(sprePos.x + 90);
      this.y = sprePos.y - 120;
      return createVector(this.x, this.y);
    } else {
      this.x = sprePos.x + this.radius*cos(this.angle);
      this.y = sprePos.y + this.radius*sin(this.angle);
      return createVector(this.x, this.y);
    }
  }

  draw() {
    let scolor = color(84, 143, 77, 0.3)
    fill(243, 179, 83, 0.3);
    ellipse(this.sprePos.x, this.sprePos.y, 5, 5);
    stroke(scolor);
    strokeWeight(1);
    if (abs(this.tempPos.x - this.position.even.x) > 0.03) {
      this.tempPos.x = lerp(this.sprePos.x, this.position.even.x, this.lerpCounter);
      this.tempPos.y = lerp(this.sprePos.y, this.position.even.y, this.lerpCounter);
      line(this.sprePos.x, this.sprePos.y, this.tempPos.x, this.tempPos.y);
    }
    if (withText) {
      noStroke();
      fill(19, 37, 106, 0.7);
      textSize(tSize + 5);
      text(this.even, this.position.even.x, this.position.even.y);
    }
    if (this.hasOddFollower) {
      let scolor = color(243, 179, 83, 0.3);
      stroke(scolor);
      strokeWeight(1);
      if (abs(this.tempPos.x - this.position.odd.x) > 0.1) {
        this.tempPos.x = lerp(this.sprePos.x, this.position.odd.x, this.lerpCounter);
        this.tempPos.y = lerp(this.sprePos.y, this.position.odd.y, this.lerpCounter);
        line(this.sprePos.x, this.sprePos.y, this.tempPos.x, this.tempPos.y);
      }
      if (withText) {
        noStroke();
        fill(19, 37, 106, 0.7);
        textSize(tSize + 5);
        text(this.odd, this.position.odd.x, this.position.odd.y);
      }
    }
    this.lerpCounter += this.lerpStep;
  }

}


function reset() {
  background(221, 226, 218, 1);
  isFirstCollatz = true;
  counter = 0;
  pos = [];
  yDist = 20;
  xDist = 25;
  yDistOdd = 20;
  xDistOdd = 25;
  angleEven = 0;
  angleOdd = 0;
  startingPoint = createVector(50, windowHeight - 150);
  tSize = 8;
  withText = false;
}

function setup() {
  createCanvas(windowWidth , windowHeight);
  frameRate(15);
  colorMode(RGB, 255, 255, 255, 1);
  reset();
  for (let i = 0; i < 1000; i++) {
    if (i == 0) {
      followers.push(new collatzFollower(1, startingPoint, i,i));
    } else {
      let predecessor = followers[i - 1];
      followers.push(new collatzFollower(predecessor.even, predecessor.position.even, 30, 10*i));
      if (predecessor.hasOddFollower) {
        followers.push(new collatzFollower(predecessor.odd, predecessor.position.odd, 30, 10*i));
      }
    }
  }
}
let element = 0;

function draw() {
  noStroke();
  noFill();
  if (element < followers.length) {
    followers[element].draw();
    if (followers[element].lerpCounter >= 1) {
      element++;
    }
  }
}