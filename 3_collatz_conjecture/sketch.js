
let angle;
let len;
let i;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(189,162,153, 170);
  i = 1;
  angle = PI/14;
}


function collatz (n) {
  //even
  if (n % 2 == 0){
    return n/2
  }
  //odd
  else {
    return (n * 3 + 1)/2
  }

}

function draw() {
  //background(255);
  len = 30;
  if (i < 15000){
  let sequence = [];
    n = i;
    do {
      sequence.push(n);
      n = collatz(n);
      
    } while (n != 1);

    sequence.push(1);
    sequence.reverse();
    resetMatrix();
    translate(windowWidth/4, windowHeight);
    sequence.forEach(function(item, index){
      if (item % 2 == 0){
        rotate(angle);
      }
      else {
        rotate(-angle);
      }
      stroke(250,230,164,30);
      strokeWeight(3);
      //len = len;
      line(0,0,0,-len);
      translate(0, -len);
      len *= 0.98 ;
      if ( index == sequence.length - 1){
        textSize(5);
        noStroke();
        fill(16,66,88,200)
        text(item, 0,0);
      }
    })
    i++;
  }
  else {
    console.log("FINISHED")
  }
  // put drawing code here
}