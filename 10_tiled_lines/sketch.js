let step;

function setup() {
  createCanvas(windowHeight, windowHeight);
  step = 50;
  frameRate(2)
  // put setup code here
}



function drawLine(x,y,goalX,goalY) {
  let leftToRight= random(1);
  if(leftToRight < 0.5) {
  line(x,y,x + goalX, y + goalY)
  }
  else {
    line(x + goalX,y,x,y + goalY)
  }
}


function draw() {
  background(250);
  stroke(50)
  strokeWeight(2)
  for(let x = 0; x < windowHeight; x+=step){
    for (let y = 0; y < windowHeight; y+=step){
      drawLine(x,y,step,step)
    }
  }
  
  // put drawing code here
}