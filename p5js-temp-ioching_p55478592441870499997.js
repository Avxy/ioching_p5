var Stalks = 50; 
var HandPile;
var EastPile;
var WestPile;
var EastRemainder;
var WestRemainder;
var CountValue1;
var CountValue2;
var CountValue3;
var LineValue;

var asciipic;  

var DrawLine;
var LineCast;

let sides = 3;
let angle, px, py;



let i1=255; 
let i2=255;
let i3=255;
let i4=255;
let i5=255;
let i6=255;

let e1=255;
let e2=255;
let e3=255;
let e4=255;
let e5=255;
let e6=255;

let coinCountValue1=255;
let coinCountValue2=255;
let coinCountValue3=255;

var clicks = 0;

let pE = 0;
let pM = 34;
let wS = 34;
let hS = 21;

let l1 = 255;
let l2 = 255;
let l3 = 255;
let l4 = 255;
let l5 = 255;
let l6 = 255;
let l7 = 255;
let l8 = 255;
let l9 = 255;
let l10 = 255;
let l11 = 255;
let l12 = 255;
/////////////////////////////////////////////////////////////////////////
const s1 = p => {
  let x = 100;
  let y = 100;
  
  let img;
  
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.setAttributes('antialias', true);
    
      img = p.loadImage('https://raw.githubusercontent.com///Avxy//ioching_p5/gh-pages/images/Y.jpg');
    
   
    
  };

  p.draw = function() {
    p.background(0,73,108);
    //p.fill(255);
  p.push();
  p.rotateZ(p.frameCount * 0.01);
  p.texture(img);
  p.sphere(40);
  p.pop();
    
  //ambientLight//////////////////////////  
  let locX = p.mouseX - p.height / 2;
  let locY = p.mouseY - p.width / 2;
  
  p.ambientLight(144, 144, 144);
  p.pointLight(255, 255, 255, locX, locY, 233);
  //ambientLight////////////////////////////
    
    

    
    
    
  p.push();
  p.translate(p.width * -0.15, p.height * -0.3);
 // rotateX(frameCount * 0.02);
  p.rotateZ(p.frameCount * 0.08);
  coins();
  p.pop();
  
  p.push();
  p.translate(p.width * 0, p.height * -0.3);
//  rotateX(frameCount * 0.02);
  p.rotateZ(p.frameCount * 0.08);
  coins();
  p.pop();
  
  p.push();
  p.translate(p.width * 0.15, p.height * -0.3);
//  rotateX(frameCount * 0.02);
  p.rotateZ(p.frameCount * 0.08);
  coins();
  p.pop();
 

  


  p.push();
  p.translate(p.width*-0.3, p.height*0.08);
  pointsEB();
  p.pop();
  
  p.push();
  p.translate(p.width*0.3, p.height*0.08);
  pointsDB();
  p.pop();
  
  p.push();
  p.translate(p.width*-0.3, p.height*-0.08);
  pointsEC();
  p.pop();
  
  p.push();
  p.translate(p.width*0.3, p.height*-0.08);
  pointsDC();
  p.pop();
//trigram();
    
    
    
  };
  
  
  
  function pointsEB()
{

p.beginShape(p.POINTS);
//translate(-width*0.3, height*0);
p.rectMode(p.CENTER);


p.noStroke();
p.fill(255);  
  
n1 = p.rect(pE-pM, pE-pM, wS, hS);
p.push(); 
  p.fill(coinCountValue1);
n2 = p.rect(pE, pE-pM, wS, hS);
  p.pop();
n3 = p.rect(pE+pM, pE-pM, wS, hS);
n4 = p.rect(pE-pM, pE, wS, hS);
  p.push();  
p.fill(coinCountValue1);
n5 = p.rect(pE, pE, wS, hS);
   p.pop();
n6 = p.rect(pE+pM, pE, wS, hS);
n7 = p.rect(pE-pM, pE+pM, wS, hS);
  p.push();  
  p.fill(coinCountValue1);
n8 = p.rect(pE, pE+pM, wS, hS);
   p.pop();
n9 = p.rect(pE+pM, pE+pM, wS, hS);

p.endShape();

}

function pointsDB()
{

p.beginShape(p.POINTS);
//translate(width*0.6, height*0);
p.rectMode(p.CENTER);


p.noStroke();
p.fill(255);  
  
n1 = p.rect(pE-pM, pE-pM, wS, hS);
p.push(); 
  p.fill(coinCountValue1);
n2 = p.rect(pE, pE-pM, wS, hS);
  p.pop();
n3 = p.rect(pE+pM, pE-pM, wS, hS);
n4 = p.rect(pE-pM, pE, wS, hS);
  p.push();  
p.fill(coinCountValue1);
n5 = p.rect(pE, pE, wS, hS);
   p.pop();
n6 = p.rect(pE+pM, pE, wS, hS);
n7 = p.rect(pE-pM, pE+pM, wS, hS);
  p.push();  
  p.fill(coinCountValue1);
n8 = p.rect(pE, pE+pM, wS, hS);
   p.pop();
n9 = p.rect(pE+pM, pE+pM, wS, hS);
p.endShape();

}




function pointsEC()
{

p.beginShape(p.POINTS);
//translate(-width*0.3, height*0);
p.rectMode(p.CENTER);


p.noStroke();
p.fill(255);  
  
n1 = p.rect(pE-pM, pE-pM, wS, hS);
p.push(); 
  p.fill(coinCountValue1);
n2 = p.rect(pE, pE-pM, wS, hS);
  p.pop();
n3 = p.rect(pE+pM, pE-pM, wS, hS);
n4 = p.rect(pE-pM, pE, wS, hS);
  p.push();  
p.fill(coinCountValue1);
n5 = p.rect(pE, pE, wS, hS);
   p.pop();
n6 = p.rect(pE+pM, pE, wS, hS);
n7 = p.rect(pE-pM, pE+pM, wS, hS);
  p.push();  
  p.fill(coinCountValue1);
n8 = p.rect(pE, pE+pM, wS, hS);
   p.pop();
n9 = p.rect(pE+pM, pE+pM, wS, hS);

p.endShape();

}

function pointsDC()
{

p.beginShape(p.POINTS);
//translate(width*0.6, height*0);
p.rectMode(p.CENTER);


p.noStroke();
p.fill(255);  
  
n1 = p.rect(pE-pM, pE-pM, wS, hS);
p.push(); 
  p.fill(coinCountValue1);
n2 = p.rect(pE, pE-pM, wS, hS);
  p.pop();
n3 = p.rect(pE+pM, pE-pM, wS, hS);
n4 = p.rect(pE-pM, pE, wS, hS);
  p.push();  
p.fill(coinCountValue1);
n5 = p.rect(pE, pE, wS, hS);
   p.pop();
n6 = p.rect(pE+pM, pE, wS, hS);
n7 = p.rect(pE-pM, pE+pM, wS, hS);
  p.push();  
  p.fill(coinCountValue1);
n8 = p.rect(pE, pE+pM, wS, hS);
   p.pop();
n9 = p.rect(pE+pM, pE+pM, wS, hS);

p.endShape();

}

function coins()
{
  
 if (CountValue1 == 2) {coinCountValue1 = p.color(55,173,198);} 
else if (CountValue1 == 3) {coinCountValue1 = p.color(255);} 
  
 if (CountValue2 == 2) {coinCountValue2 = p.color(55,173,198);} 
else if (CountValue2 == 3) {coinCountValue2 = p.color(255);}   
  
 if (CountValue3 == 2) {coinCountValue3 = p.color(55,173,198);} 
else if (CountValue3 == 3) {coinCountValue3 = p.color(255);}   

//  beginShape();
//  push();
  p.noStroke(0);
     p.specularMaterial(250);
 //   ambientMaterial(250);
 // fill(coinCountValue2);
//  rotateX(frameCount * 0.02);
//  rotateZ(frameCount * 0.02);
  p.cylinder(34, 8, 24, 1, 1, 1);
//  pop();
//  endShape();   
 
}  
  

  
function steps()
{

p.clicks ++;
  
//for (let i = 0; i < 6 + 1; i++) {
if(clicks==6){clicks=0;}  
  
 console.log(clicks);  
  
      switch(clicks) {
    case 0:
     i1 = color(coinCountValue1);
     e1 = color(coinCountValue1);      
      break;
    case 1:
     i2 = color(coinCountValue1);
     e2 = color(coinCountValue1);
      break;
    case 2:
     i3 = color(coinCountValue1);
     e3 = color(coinCountValue1);     
      break;
    case 3:
     i4 = color(coinCountValue1);
     e4 = color(coinCountValue1);
      break;
    case 4:
     i5 = color(coinCountValue1);
     e5 = color(coinCountValue1);
      break;
    case 5:
     i6 = color(coinCountValue1);
     e6 = color(coinCountValue1);
      break;
}
//}     
}



function mousePressed() 
{
LineCast();
 steps();


//print (LineValue);
//print (DrawLine);
print (asciipic);    
//print (LineCast);  
//print(int(0));
//print (changing);  
print (LineCast); 
}   
  
  
  
  
};

new p5(s1); // invoke p5
////////////////////////////////////////////////////////////////////////
























////////////////////////////////////////////////////////////////////////
const s2 = p => {
  let x = 100;
  let y = 100;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.setAttributes('antialias', true);
  };
//draw////////////////////////////////////////////////////////  
  p.draw = function() {
    p.background(55,173,189);
    p.fill(255);

    
  //ambientLight//////////////////////////  
  let locX = p.mouseX - p.height / 2;
  let locY = p.mouseY - p.width / 2;
  
  p.ambientLight(144, 144, 144);
  p.pointLight(255, 255, 255, locX, locY, 233);
  //ambientLight////////////////////////////
    
  eHexagon();
  iHexagon();
    
  };
//draw////////////////////////////////////////////////////////  
  
  
  function iHexagon()
{
  p.stroke(55,173,189);
 // angleMode(DEGREES);
  p.push();
  
  p.fill(i1);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate(p.PI/3);
  polygon(-68, 0, 34, 3);
  p.pop();
   
  p.push();
  p.fill(i2);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate((2*p.PI)/3);
  polygon(-68, 0, 34, 3);
  p.pop();
  
  p.push();
  p.fill(i3);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate(p.PI);
  polygon(-68, 0, 34, 3);
  p.pop();
  
  p.push();
  p.fill(i4);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate((4*p.PI)/3);
  polygon(-68, 0, 34, 3);
  p.pop();
  
  p.push();
  p.fill(i5);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate((5*p.PI)/3);
  polygon(-68, 0, 34, 3);
  p.pop();
  
  p.push();
  p.fill(i6);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate(2*p.PI);
  polygon(-68, 0, 34, 3);
  p.pop();
  
}

function eHexagon()
{
  p.stroke(55,173,189);
// angleMode(DEGREES);
  p.push();
  p.fill(e1);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate(p.PI/3);
  polygon(-110, 0, 55, 3);
  p.pop();
   
  p.push();
  p.fill(e2);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate((2*p.PI)/3);
  polygon(-110, 0, 55, 3);
  p.pop();
  
  p.push();
  p.fill(e3);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate(p.PI);
  polygon(-110, 0, 55, 3);
  p.pop();
  
  p.push();
  p.fill(e4);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate((4*p.PI)/3);
  polygon(-110, 0, 55, 3);
  p.pop();
  
  p.push();
  p.fill(e5);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate((5*p.PI)/3);
  polygon(-110, 0, 55, 3);
  p.pop();
  
  p.push();
  p.fill(e6);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  p.rotate(2*p.PI);
  polygon(-110, 0, 55, 3);
  p.pop();
  
}






function polygon(x, y, radius, npoints, pt) {
  let angle = p.TWO_PI / npoints;
  p.beginShape();
  p.translate(radius, 0); 
  for (let a = 0; a < p.TWO_PI; a += angle) {
    let sx = x + p.cos(a) * radius;
    let sy = y + p.sin(a) * radius;
    let pt = p.vertex(sx, sy, 0);
  }

  p.endShape(p.CLOSE);
}

  
  
};

new p5(s2); // invoke p5
////////////////////////////////////////////////////////////////////////
















////////////////////////////////////////////////////////////////////////
const s3 = p => {
  let x = 100;
  let y = 100;

  let img;
  
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.setAttributes('antialias', true);
    
img = p.loadImage('https://raw.githubusercontent.com///Avxy//ioching_p5/gh-pages/images/Y.jpg');
    
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);

    
  p.push();
  p.rotateZ(p.frameCount * 0.01);
  p.rotateX(p.frameCount * 0.01);
  p.rotateY(p.frameCount * 0.01);
  p.texture(img);
  p.box(80);
  p.pop(); 
    
  };
};

new p5(s3); // invoke p5
////////////////////////////////////////////////////////////////////////
