
// function keyPressed() {
//   if (key === "s") {
//     const name = prompt("Enter name", "out-${Date.now()}.png");
//     save(name);
//   }
// }
var s = function(k){
  let c = k.color("#FFFFFF");
  c.setAlpha(128);
  k.setup = function() {
    k.createCanvas(400, 400);
    k.background("#DB7093");
    k.noStroke();
    //sun
    k.stroke("yellow");
    k.fill("orange");
    k.circle(25, 50, 30);
    k.stroke("black");
    k.fill("black");
    //leg right
    k.quad(300, 200, 230, 200, 230, 400, 300, 400);
    //leg left
    k.quad(200, 200, 130, 200, 130, 400, 200, 400);
    k.stroke("darkblue");
    k.fill("lightblue");
    //right arm
    k.rect(310, 0, 50, 230, 20);
    // house
    k.stroke("coral");
    k.fill("saddlebrown");
    k.triangle(300, 335, 320, 300, 360, 335);
    k.square(300, 339, 70);
    //Treetrunk
    k.fill("sienna");
    k.triangle(100, 200, 20, 270, 200, 270);
    k.square(20, 310, 180);
    k.stroke("sienna");
    k.fill("sienna");
    k.line(180, 340, 180, 260);
    k.line(90, 340, 90, 260);
    k.line(150, 340, 150, 260);
    k.line(130, 340, 130, 260);
    k.line(120, 340, 120, 260);
    k.line(70, 340, 70, 260);
    k.line(40, 340, 40, 260);
    //explosion
    k.stroke("coral");
    k.circle(110, 340, 70, 260);
    k.fill("orange");
    k.circle(120, 340, 200, 200);
    k.stroke("coral");
    k.fill("coral");
    k.circle(120, 340, 120, 200);
    k.fill("BlanchedAlmond");
    k.circle(120, 340, 90, 200);
    //left leg
    k.stroke("black");
    k.fill("black");
    k.quad(200, 200, 130, 20, 130, 400, 200, 400);
    k.stroke("darkblue");
    k.fill("lightblue");
    //leg left
    k.quad(200, 200, 130, 200, 130, 330, 200, 330);
    //right leg
    k.quad(300, 200, 230, 200, 230, 330, 300, 330);
    //skirt
    k.stroke("darkblue");
    k.fill("lightblue");
    k.rect(100, 200, 220, -200, 20);
    k.stroke("darkblue");
    k.fill("lightblue");
    //left arm
    k.rect(50, 0, 50, 230, 20);
    k.noStroke();
    k.fill(c);
    k.fill(c);
    k.rect(20, 0, 210, 180, 300);
    k.rect(120, 0, 210, 180, 300);
    k.rect(170, 0, 210, 180, 300);
  };
}
var s2 = function(k){
  k.setup = function(){
   k.createCanvas(400, 400);
   k.background("purple");
  }
  k.draw = function() {
    k.stroke("BlueViolet");
    k.fill("BlueViolet");
    k.rect(20, 0, 360, 50);
    k.stroke("DarkSalmon");
    k.fill("DarkSalmon");
    k.rect(20, 30, 360, 30);
    k.filter(k.BLUR, 30);
    k.fill("orange");
    k.rect(100, 150, 200, 150);
    k.noStroke();
    k.filter(k.BLUR, 40);
    k.fill("orange");
    k.stroke("orange");
    k.circle(200, 140, 100, 100);
    k.fill("yellow");
    k.stroke("yellow");
    k.circle(200, 140, 70, 100);
    k.fill("white");
    k.noStroke();
    k.circle(200, 140, 40, 100);
    k.ellipse(140, 150, 80, 40);
    k.ellipse(270, 150, 80, 40);
    k.ellipse(100, 180, 80, 40);
    k.ellipse(150, 180, 80, 40);
    k.ellipse(260, 180, 80, 40);
    k.ellipse(300, 180, 80, 40);
    
    k.stroke("BlueViolet");
    //strokeWeight(0);
    k.fill("BlueViolet");
    k.rect(0, 300, 400, 120);
    k.fill("Indigo");
    k.noStroke();
    k.rect(90, 350, 230, 10);
    k.rect(100, 330, 200, 10);
    k.rect(110, 310, 170, 10);
    k.fill("orange");
    //rect(90, 280, 170, 2);
    //rect(90, 300, 210, 2);
    //rect(90, 320, 200, 2);
    //behind rocks right
    k.fill("#9683EC");
    k.rect(240, 250, 50, 50);
    k.rect(230, 260, 40, 40);
    k.rect(220, 270, 30, 30);
    k.rect(260, 240, 60, 60);
    k.rect(280, 220, 60, 60);
    //behind rocks left
    k.rect(140, 270, 30, 30);
    k.rect(160, 280, 20, 20);
    //rocks
    k.fill("Indigo");
    k.rect(90, 230, 50, 70);
    k.rect(40, 200, 50, 100);
    k.rect(0, 220, 50, 80);
    k.rect(90, 210, 20, 90);
    k.rect(0, 210, 20, 90);
    k.rect(300, 230, 50, 70);
    k.rect(331, 240, 40, 60);
    k.rect(350, 250, 50, 50);
    k.rect(350, 350, 50, 70);
    k.rect(320, 370, 50, 70);
    k.rect(310, 240, 50, 0);
    k.rect(290, 240, 50, 10);
    k.rect(310, 220, 30, 10);
    k.rect(270, 250, 50, 50);
    k.rect(260, 260, 40, 40);
    k.rect(19, 350, 50, 50);
    k.rect(19, 370, 50, 50);
    k.rect(0, 370, 60, 50);
  }
}
var sULTRA = function(k){
  k.setup = function() {
    
  };

  k.draw = function(){

  };
}
var s3 = function(k){
  let c1 = k.color(255, 204, 0);
  k.setup = function() {
    k.createCanvas(400, 400);
    k.fill(c1);
    k.noStroke();
  }

  k.draw = function(){
    k.background("blue");
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let x = i * 100;
        let y = j * 100;
        k.stroke(0);
        k.fill("white");

        k.circle(50 + x, 50 + y, 0 + y);

        k.fill(c1);
        k.noStroke();
        k.circle(45, 45, 80);
        k.fill("orange");
        k.circle(35, 35, 40);
      }
    }
  }
}

var s4 = function(k){
  k.setup = function() {
    k.createCanvas(400, 400);
  };
  let c = k.color("#FFFFFF");
  k.draw = function(){
    k.background("AliceBlue");
    k.noStroke();
    //bread
    k.noStroke();
    k.fill(c);
    c.setAlpha(190);
    k.fill(c);
    k.ellipse(150, 232, 310, 40);
    k.stroke("grey");
    k.noFill();
    k.ellipse(180, 232, 310, 40);
    k.ellipse(180, 232, 180, 20);
    k.ellipse(180, 240, 310, 40);
    //bottom
    k.stroke("orange");
    k.fill("saddlebrown");
    k.rect(70, 200, 210, 30);
    //salat
    k.stroke("green");
    k.fill("green");
    k.ellipse(70, 180, 60, 50);
    k.ellipse(110, 180, 60, 50);
    k.ellipse(150, 180, 60, 50);
    k.ellipse(190, 180, 60, 50);
    k.ellipse(230, 180, 60, 50);
    k.ellipse(270, 180, 60, 50);
    //cheese
    k.stroke("#f9d02e");
    k.fill("#f9d02e");
    k.rect(70, 140, 210, 20);
    //tomato
    k.stroke("red");
    k.fill("red");
    k.ellipse(120, 130, 130, 50);
    k.ellipse(220, 130, 130, 50);
    k.stroke("#e06666");
    k.fill("#e06666");
    k.ellipse(120, 130, 100, 50);
    k.ellipse(220, 130, 100, 50);
    k.stroke("##f4cccc");
    k.fill("#f4cccc");
    k.ellipse(120, 132, 30, 30);
    k.ellipse(220, 132, 30, 30);
    k.stroke("orange");
    k.fill("saddlebrown");
    //top
    k.rect(70, 80, 210, 40);
    };
}
var s5 = function(k){
  k.setup = function() {
   k.createCanvas(400, 300);
  };

  k.draw = function(){
    k.background("white");
    //100 x and 100 y
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let x = i * 140;
        let y = j * 140;
  
        k.stroke("black");
        k.fill("black");
        k.rect(0 + x, 0 + y, 90 + x, 90 + y);
       
      }
    }
  };
}
new p5(s, 'c1');
new p5(s2,'c2');
new p5(s3,'c3');
new p5 (s4,'c4');
new p5 (s5,'c5');