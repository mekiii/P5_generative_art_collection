let particles = [];
let numOfParticles = 80;
let displayText = false;
let trackButton = document.getElementById("trackbutton");
let canvas;
let context;
canvas = document.getElementById("videoCanvas");
context = canvas.getContext("2d");
let model;
let myHand;

// Initializing particle class
class Particle {
  constructor(id) {
      this.location = createVector(random(windowWidth), random(windowHeight)); 
      this.velocity = createVector(random(-2, 2), random(-2,2));
      this.id = id;
      this.maxDistance = 200;
      this.connections = 0;
  }

  move() {
    if (this.location.dist(myHand.location) < 100){
      let differenceX = this.location.x - myHand.location.x;
      let differenceY = this.location.y - myHand.location.y;
      this.location.x +=  differenceX*0.2;
      this.location.x = (windowWidth + this.location.x) % windowWidth ;
      this.location.y += differenceY*0.2;
      this.location.y = (windowHeight + this.location.y) % windowHeight;
    }
    else {
      this.location.x += this.velocity.x;
      this.location.x = (windowWidth + this.location.x) % windowWidth ;
      this.location.y += this.velocity.y;
      this.location.y = (windowHeight + this.location.y) % windowHeight;
    }
    
  }

  draw(){
    fill(255);
    noStroke();
    let size = 4 + (this.connections);
    ellipse(this.location.x,this.location.y, size,size);
    fill (240,0,0);

    if(displayText){
    let locationText = Math.round(this.location.x) + ", " + Math.round(this.location.y);
    fill(255);
    textSize(15);
    text(locationText, this.location.x, this.location.y)
    }
  }

  detectNeighbour(){
    this.connections = 0;

    for (let j = this.id + 1 ; j < particles.length; j++){
      if (this.location.dist(particles[j].location) < this.maxDistance){
        this.connections++;
        this.drawLine(this.location, particles[j].location);
      }
    }
  }


  drawLine(startPoint, endPoint){
    let dist = startPoint.dist(endPoint);
    let alpha = map(dist, 0, this.maxDistance, 1.0, 0.0);
    let c = color('rgba(0, 255, 255,' + alpha +  ')')
    stroke(c);
    strokeWeight(1);
    line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
  }


}

function setup() {
  startVideo();
  createCanvas(windowWidth, windowHeight);
  myParticle = new Particle();
  console.log(myParticle.velocity);
  for (let i = 0; i < numOfParticles; i++){
    particles.push(new Particle(i));
  }
  myHand = new handParticle();
}

function draw() {
  background(20);
  for (let i = 0; i < numOfParticles; i++){
    particles[i].detectNeighbour();
    //particles[i].detectHand();
    particles[i].move();
    particles[i].draw();
  }
  myHand.draw();
}

class handParticle {
  constructor() {
    this.location = createVector(windowWidth/2, windowHeight/2);
    this.lerpStep = 0.06;
    this.lerpCounter;
    this.locationGoal;
  }

  updateLocation(vector){
    this.lerpCounter = 0;
    let goalX = map(vector.x, 0, video.videoWidth, 0, windowWidth, true);
    
    let goalY = map(vector.y, 0, video.videoHeight, 0, windowHeight, true);
    this.locationGoal = createVector(goalX,goalY);
  }

  draw(){
    this.lerpCounter += this.lerpStep;
    this.location = p5.Vector.lerp(this.location, this.locationGoal, this.lerpCounter);
    let c = color('rgba(0, 255, 255,' + 0.4 +  ')')
    fill(c);
    ellipse(this.location.x, this.location.y, 100, 100)
  }
}

//######################################HAND TRACK JS

const modelParams = {
  flipHorizontal: true, // flip e.g for video  
  maxNumBoxes: 1, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.6, // confidence threshold for predictions.
}

const video = document.getElementById('myvideo');  

//start video
function startVideo() {
  handTrack.startVideo(video).then(function (status) {
      console.log("video started", status);
      if (status) {
          //isVideo = true
          runDetection()
      } else {
         console.log( "Please enable video")
      }
  });
}


handTrack.load(modelParams).then(thisModel => { 
 model = thisModel;
 //setInterval(runDetection, 500);
 runDetection();
});

function runDetection() {
  model.detect(video).then(predictions => {
    model.renderPredictions(predictions, canvas, context, video);

    if (predictions[0]){
      let handX = predictions[0].bbox[0] + (predictions[0].bbox[2] / 2);
      let handY = predictions[0].bbox[1] + (predictions[0].bbox[3] / 2);
      let newHandLocation = createVector(handX, handY);
      myHand.updateLocation(newHandLocation);
     
    }
    runDetection();
  });
}