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
  
  let img1;
  let img2;
  
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    p.setAttributes('antialias', true);
    
      img1 = p.loadImage('https://raw.githubusercontent.com/Avxy/ioching_p5/gh-pages/images/64W89.png');
    
      img2 = p.loadImage('https://raw.githubusercontent.com/Avxy/ioching_p5/gh-pages/images/yinYang.png');
   
    
  };

  p.draw = function() {
  p.background(0,73,108);
    //p.fill(255);
    
  p.push();
  p.translate(0, 0, -34);
  p.noStroke();
  p.rotateZ(p.frameCount * -0.001);
  p.texture(img1);
  p.circle(0,0,610);
  p.pop();  
    
  p.push();
  p.noStroke();
  p.rotateZ(p.frameCount * 0.005);
  p.texture(img2);
  p.circle(0,0,144);
  p.pop();
    
  //ambientLight//////////////////////////  
  let locX = p.mouseX - p.height / 2;
  let locY = p.mouseY - p.width / 2;
  
  p.ambientLight(144, 144, 144);
  p.pointLight(255, 255, 255, locX, locY, 233);
  //ambientLight////////////////////////////
    
    

    
    
    
  p.push();
  p.translate(p.width * -0.15, p.height * -0.3);
  p.rotateX(p.PI/2.0);
  //p.rotateZ(p.frameCount * 0.08);
  coins();
  p.pop();
  
  p.push();
  p.translate(p.width * 0, p.height * -0.3);
  p.rotateX(p.PI/2.0);
  //p.rotateZ(p.frameCount * 0.08);
  coins();
  p.pop();
  
  p.push();
  p.translate(p.width * 0.15, p.height * -0.3);
  p.rotateX(p.PI/2.0);
  //p.rotateZ(p.frameCount * 0.08);
  coins();
  p.pop();
 

  


  p.push();
  p.translate(p.width*-0.25, p.height*0.08);
  pointsEB();
  p.pop();
  
  p.push();
  p.translate(p.width*0.25, p.height*0.08);
  pointsDB();
  p.pop();
  
  p.push();
  p.translate(p.width*-0.25, p.height*-0.08);
  pointsEC();
  p.pop();
  
  p.push();
  p.translate(p.width*0.25, p.height*-0.08);
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
  



var DivideStalks = function(YarrowStalks){
// Divide 49 stalks into eastpile westpile
// Subtract one from westpile put in handpile

WestPile = Math.floor((Math.random() * YarrowStalks) + 1);
EastPile = YarrowStalks - WestPile;
WestPile = WestPile - 1;
HandPile = 1;
}

var DivideEastAndWest = function(){
EastRemainder = (EastPile % 4);
WestRemainder = (WestPile % 4);
if (EastRemainder == 0) EastRemainder = 4;
if (WestRemainder == 0) WestRemainder = 4;
HandPile = HandPile + EastRemainder + WestRemainder;



}
var LineCast = function(){
//This function creates the pictures of lines as broken or unbroken
//and changing or unchanging 

Stalks = 49; //Remove one stalk and set it aside 

DivideStalks(Stalks);
// Divide 49 Yarrow stalks into two piles at random: East and West
// Subtract a single stalk from the West and put it in your hand 
// between thumb and pointer finger 
DivideEastAndWest();
// Pick up stalks from the West pile in sets of 4 and set aside
// until 4 or fewer stalks remain
// Put those 4 or fewer stalks between your pointer and ring fingers
// Now divide the West pile by 4 until 4 or fewer stalks remain
// Remainder goes in hand again between ring and fourth finger
// Now count the total remainder stalks in your hand
// Remainder will always be 9 or 5 (1+x+x where x is 0-4)
// If 9 stalks remain an arbitrary value of 2 was assigned to this step
// If 5 stalks remain an arbitrary value of 3 was assigned.
if(EastRemainder + WestRemainder + 1 == 9) CountValue1 = 2;
if(EastRemainder + WestRemainder + 1 == 5) CountValue1 = 3;
Stalks = Stalks - HandPile;
// Remove stalks from you hand and set aside.
DivideStalks(Stalks);
// Now divide the pile of stalks before you into two piles again
// And remove one from the West pile.
DivideEastAndWest();
// And sort each pile again by sets of four stalks
// Until 4 or fewer remain, place those remainder stalks in your hand 
// As your stalks are now 49-9 = 40 or 49-5 = 44, minus 
// the 1 you always take from the westpile
// the number you are dividing by 4 is either 39 or 43:
// the remainder will now always be 8 or 4
// 1+1+2=4
// 1+2+1=4
// 1+3+4=8
// 1+4+3=8
// (4 can only occur once, as neither 39 nor 43 are evenly divisible
// by 4)
// If 8 stalks are in your hand, the arbitrary counting value is assigned 2
// If 4 stalks, the counting value is assigned 3
if(EastRemainder + WestRemainder + 1 == 8) CountValue2 = 2;
if(EastRemainder + WestRemainder + 1 == 4) CountValue2 = 3;
Stalks = Stalks - HandPile;
// For the third and final time for this line, 
// you set aside the 8 or 4 stalks in your HandPile
DivideStalks(Stalks);
// You now have 35, 31, or 39 stalks before you
// Divide them into East and West piles for a third time
DivideEastAndWest();
// Remove one from the west pile again
// and repeat the removal of 4 stalks from each pile
// the possible outcomes are again 8 or 4
// and the same arbitrary count value is assigned as
// in the last step: an 8 means that value = 2 and a 4 means 
// it is assigned a 3.
if(EastRemainder + WestRemainder + 1 == 8) CountValue3 = 2;
if(EastRemainder + WestRemainder + 1 == 4) CountValue3 = 3;
LineValue = CountValue1 + CountValue2 + CountValue3;
// You now have 3 counting values of 2 or 3 which you
// add together. 
// the results determine the nature of this single line:
// If 7 Line = strong
// If 8 Line = yielding
// if 9 Line = strong but Changing
// if 6 Line = yielding but Changing
if(LineValue == 6) DrawLine('weak',true);
if(LineValue == 7) DrawLine('strong',false);
if(LineValue == 8) DrawLine('weak',false);
if(LineValue == 9) DrawLine('strong',true);
}// End LineCast Function

var DrawLine = function(line,changing){
if (changing && line == 'weak')   asciipic = '===&nbsp;o&nbsp;===';
if (changing && line == 'strong') asciipic = '====x====';
if (!changing && line == 'strong') asciipic = '=========';
if (!changing && line == 'weak') asciipic = '===&nbsp;&nbsp;&nbsp;===';
}  
  
function steps()
{

clicks ++;
  
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
p.print (asciipic);    
//print (LineCast);  
//print(int(0));
//print (changing);  
p.console.log(LineCast); 
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
    p.background(0, 73, 108);
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
    p.background(0, 73, 108);
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
