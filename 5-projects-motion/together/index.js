let x;
let y;
let ySpeed
let xSpeed


function setup(){
  const canvas = createCanvas(400,400);
  canvas.parent("sketch");
  background('purple');
  xSpeed = random(-5,5);
  ySpeed = random (-5,5);
  x = width/ 2;
  y = width/ 2;
}

function draw() {
  background('seagreen');
  //kreis links
r = random(255);
g = random(100,100);
b = random (100);
a = random(200,255);
  fill(x,r,g,b,a);
  circle (x,y,100)
  //krei rechts
  circle (y,x,100)
  //circle(x,x,100)
  
  x += xSpeed;
  y += ySpeed;
  if (x > width - 50 || x < 0){
    xSpeed *= -1;
    console.log({ySpeed, xSpeed});
  }
  if (y > height - 50 || y < 0){
    ySpeed *= -1;
    console.log({ ySpeed, xSpeed});
  }

}
