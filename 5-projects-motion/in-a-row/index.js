let elements = [];
let canvaswidth =  400;
let canvasheight = 400;

function setup() {
  const canvas = createCanvas(canvaswidth, canvasheight);
  canvas.parent("sketch");
  initializeElements();
}

function initializeElements() {
  elements = [
    { x: width / 2, y: height / 4 -canvasheight*0.121, speed: 3, size: canvasheight *0.1, color: getRandomColor() }, // Top row
    { x: width / 2, y: height / 2 -canvasheight*0.121, speed: 4, size: canvasheight *0.1, color: getRandomColor() }, // Middle row
    { x: width / 2, y: (3 * height) / 4-canvasheight*0.121, speed: 5, size: canvasheight *0.1, color: getRandomColor() }, // Bottom row
  ];
}

function draw() {
  background("black");

  
  fill("white");
  rect(0,height / 4 -canvasheight*0.075, width, canvasheight*0.05);
  rect(0, height / 2 -canvasheight*0.075, width, canvasheight *0.05);
  rect(0,(3 * height) / 4-canvasheight*0.075, width, canvasheight*0.05);


  for (let element of elements) {
    fill(element.color);
    circle(element.x, element.y, element.size);

    
    element.x += element.speed;

   
    if (element.x > width - element.size / 2 || element.x < element.size / 2) {
      element.speed *= -1;
    }
  }
}

function getRandomColor() {
  return color(random(255), random(255), random(255));
}

//relative
function windowResized() {
  resizeCanvas(canvaswidth, canvasheight);
  initializeElements();
}
