//Variables
let CANVASSIZE = 600;
let FIELDSIZE = 100;
let CIRCLELENGTH = CANVASSIZE / FIELDSIZE;
let ELLIPSENUMBER;
let start;
let grid = [];
let tempGrid = [];
let canvas;
let isStopped;

function setup() {
  // put setup code here
  canvas = createCanvas(CANVASSIZE, CANVASSIZE, SVG);
  ellipseMode(CORNER);
  frameRate(10);
  setGridRandomly(FIELDSIZE);
  start = true;
  isStopped = false;
}


function setGridRandomly(gridSize) {
  for (i = 0; i < gridSize; i++) {
    let row = [];
    for (j = 0; j < gridSize; j++) {
      let threshold = map(i + j, 0, gridSize * 2, 0, .587, true);
      if (random(1) > 0.8) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    grid.push(row);
  }
}


function draw() {
  if (start) {
    background(0)
    drawGrid(grid);
   
    start = false;
  } else {
     grid = setNewGrid(grid);
     drawGrid(grid);
    }
}

function mouseClicked() {
  //drawGrid(grid);
  grid = setNewGrid(grid);
}

function checkNeighbours(row, col, myGrid) {
  let counter = 0;
  for (k = row - 1; k <= row + 1; k++) {
    //k = (FIELDSIZE + k) % FIELDSIZE;
    for (l = col - 1; l <= col + 1; l++) {
      //l = (FIELDSIZE + l) % FIELDSIZE;
      if ((0 <= k && k < FIELDSIZE) && (0 <= l && l < FIELDSIZE)) {
        if (myGrid[k][l] === 1 && !(k === row && l === col)) {
          counter++;
        }
      }
    }
  }
  return counter;
}

function setNewGrid(myGrid) {
  let newGrid = JSON.parse(JSON.stringify(myGrid));
  for (let i = 0; i < FIELDSIZE; i++) {
    for (let j = 0; j < FIELDSIZE; j++) {
      let NumOfNeighbours = checkNeighbours(i, j, myGrid);
      //Overcrowded
      if (NumOfNeighbours > 3 && myGrid[i][j] == 1) {
        newGrid[i][j] = 0;
      } else if (NumOfNeighbours == 3 ) {
        newGrid[i][j] = 1;
      } else if (myGrid[i][j] == 1 && NumOfNeighbours == 2) {
        newGrid[i][j] = 1;
      } else if (NumOfNeighbours <= 1) {
        newGrid[i][j] = 0;
      }
    }
  }

  
  return newGrid;
}

function drawGrid(gridArray) {
  let numberOfdots = 0;
  background(0);
  for (i = 0; i < FIELDSIZE; i++) {
    for (j = 0; j < FIELDSIZE; j++) {
      if (gridArray[i][j] == 1) {
        drawDot(i, j);
        numberOfdots = numberOfdots + 1;
      }
      let NumOfNeighbours = checkNeighbours(i, j, gridArray);
      //drawNeighborText(i,j,NumOfNeighbours);
    }
  }
  fill(255);
  textSize(18);
  text(numberOfdots, 15, 25);
}


function drawDot(row, col) {
  push();
  translate(col * CIRCLELENGTH, row * CIRCLELENGTH);
  fill(255, 237, 115);
  ellipse(0, 0, CIRCLELENGTH, CIRCLELENGTH);
  pop();
}

function drawNeighborText(row, col,num) {
  push();
  rectMode(CENTER);
  translate(col * CIRCLELENGTH, row * CIRCLELENGTH);
 
  fill(255);
  stroke(0);
  textSize(15);
  text(num, CIRCLELENGTH/2, CIRCLELENGTH/2);
  pop();
}
