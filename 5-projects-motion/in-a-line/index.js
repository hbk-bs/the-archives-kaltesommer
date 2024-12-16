let angle = 0;       
let speed = 0.05;     
let amplitude;       
let circleSize;       

function setup() {
  const canvas = createCanvas(200, 200);
  canvas.parent("sketch");
  background("black");
  

  amplitude = height * 0.05;   // Amplitude ist 15% des canvas
  circleSize = width * 0.1;   
}

function draw() {

  let y = height / 2 + amplitude * sin(angle);          
  let y1 = height / 2 + amplitude * sin(angle + PI / 2); 
  let y2 = height / 2 + amplitude * sin(angle + PI);    

  
  fill(300,30,30)
  ellipse(width * 0.25, y, circleSize, circleSize);   
  fill(200,30,30)
  ellipse(width * 0.5, y1, circleSize, circleSize);  
  fill(100,30,30)
  ellipse(width * 0.75, y2, circleSize, circleSize);

  angle += speed;
}
