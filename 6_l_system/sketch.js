let axiom = "FX";
let sentence = axiom;
let len = 100;
let angle;

let rules = [];
rules[0] = {
  a: "F",
  b: "FF-[-F+F+F]+[+F-F-F]"
}

/*rules[1] = {
  a: "X",
  b: "F+[[X]-X]-F[-FX]+X"
  //c: "F+[[X]-X]-F[-FX]+X"
}*/


function generate() {
  let nextSentence = "";
  len *= 0.6;
  for (let i=0; i < sentence.length; i++){
    let current = sentence.charAt(i);
    let found = false;
    for (let j = 0; j < rules.length; j++){
      if(current == rules[j].a) {
          nextSentence += rules[j].b; 
          found = true;
          break;   
      }
      if (!found){
        nextSentence += current;
      }
    }
  }
  sentence = nextSentence;
  turtle();
}

function turtle() {
  background(51,47,60);
  stroke(116,194,134);
  resetMatrix();
  translate(windowWidth/2, windowHeight);
  for (let i=0; i < sentence.length; i++){
    let current = sentence.charAt(i);
    if (current == "F") {
    //if (current == "F"){
      line(0,0,0, -len);
      translate(0, -len);
    }
    else if (current == "X"){
      translate(0, -len);
    }
    else if (current == "+"){
        rotate(angle);
    }
    else if (current == "-") {
      rotate(-angle);
    }
    else if (current == "[") {
      push();
    }
    else if (current == "]") {
      pop();
    }
  }
}
  

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51,47,60);
  turtle();
  angle = radians(25);
  // put setup code here
}

let counter = 0;

function draw() {
  counter+= 0.01;
  // put drawing code here
  updateAngle(counter);
  turtle();
}

function mousePressed() {
 generate();
 console.log(sentence); 
}