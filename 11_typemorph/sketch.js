var textTyped = 'Verbindung';

var font;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  // put setup code here
  noLoop();
  background(100,100,0);

  opentype.load('data/DaimlerCS-Demi.otf', function(err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
      loop();
    }
  });
}

let i = 0;
let pnt0 = {};
function draw() {
  
  if (!font) return;

  //background(255);
  // margin border

  if (textTyped.length > 0) {
    // get a path from OpenType.js
    var fontPath = font.getPath(textTyped, 0, 0, 200);
    // convert it to a g.Path object
    var path = new g.Path(fontPath.commands);
    // resample it with equidistant points
    path = g.resampleByLength(path, 2);
    // path = g.resampleByAmount(path, 500);

    noFill();
    stroke(56,((i*0.25) % 100) + 50,90);
    
    //var diameter = 2;
    if (i < path.commands.length) {
      if(i == 0){
        pnt0.x = random(windowWidth) - + windowWidth/4 ;
        pnt0.y = - windowHeight/2;
      }
      else {
        pnt0 = path.commands[i - 1];
      }
      let someNoise = int(random(-30,30));
      if ((someNoise + i >= 0) && (someNoise + i < path.commands.length)){
        let pnt1 = path.commands[someNoise + i];
        line(pnt0.x + windowWidth/6 , pnt0.y + windowHeight/2, pnt1.x + windowWidth/6, pnt1.y + windowHeight/2)
        //ellipse(pnt.x, pnt.y, diameter, diameter);
      }
      else {
        let pnt1 = path.commands[i];
        line(pnt0.x + windowWidth/6 , pnt0.y + windowHeight/2, pnt1.x + windowWidth/6, pnt1.y + windowHeight/2)
      }  
    }

    /*
    beginShape();
    vertex(random(windowWidth), 0);
    let randompnt = path.commands[int(random(path.commands.length))];
    vertex(randompnt.x+ windowWidth/4,randompnt.y+ windowHeight/2);
    vertex(random(windowWidth), 0);
    endShape();
    */
  }
  i++
}



function keyReleased() {
  // export png
  if (keyCode == CONTROL) saveCanvas(gd.timestamp(), 'png');
}

function keyPressed() {
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    if (textTyped.length > 0) {
      textTyped = textTyped.substring(0, textTyped.length - 1);
      loop();
    }
  }
}

function keyTyped() {
  if (keyCode >= 32) {
    textTyped += key;
    loop();
  }
}