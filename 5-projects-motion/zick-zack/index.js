let circleProgress = 0; 
let speed = 2;

function zickzack(startX, startY) {
  line(startX, startY, startX + 30, startY + 30);
  line(startX + 30, startY + 30, startX + 60, startY);
}

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("sketch");
  background(255);
  fill(40,120,200,100);
  strokeWeight(3);
}

function draw() {
  background(255);
  
  // zick zack 
  for (let i = 0; i < 7; i++) {
   zickzack(i * 60, 200); //ganze Linien zick zack weg
  }
  // wo der zickzack ist
  let segment = Math.floor(circleProgress / 60);
  let localProgress = circleProgress % 60; 
  

  let circleX, circleY;
  if (localProgress < 30) {
    
    circleX = segment * 60 + localProgress;
    circleY = 200 + (localProgress / 30) * 30;
  } else {
    circleX = segment * 60 + localProgress;
    circleY = 230 - ((localProgress - 30) / 30) * 30;
  }

  ellipse(circleX, circleY, 20);

  circleProgress += speed;

  if (circleProgress > 60 * 7) {
    circleProgress = 0;
  }
}