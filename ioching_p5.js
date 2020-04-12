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


  
  
  
  
function setup() {
  
  
  
  createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);



  loadImage('https://github.com/Avxy/ioching_p5/blob/gh-/pages/images/ichingW.jpg', img => {
    image(img, width*0.5, height*0.5);
  });
  
  

 
}

function draw() 
{
background(55, 173, 198);
noStroke(55, 173, 198);
//background(1, 73, 108);
strokeWeight(4);
//stroke(233, 144, 34);
//noFill();
  
 
  
//ambientLight//////////////////////////  
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  
  ambientLight(144, 144, 144);
  pointLight(255, 255, 255, locX, locY, 233);
//ambientLight////////////////////////////
  
//console.log(asciipic);
//print(lines);
//print(int(0));




  
//  push();
//  rotateZ(frameCount * 0.005);
//  rotateX(frameCount * 0.005);
//  rotateY(frameCount * 0.008);
//  torus(610, 3);
//  pop();
  
  
  
//  translate(width * 0.5, height * 0.5, 200, 1);
//  translate(width * 0.5, height * 0.5);
//  translate(p5.Vector.fromAngle(width * 0.5, height * 0.5));
  
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01); 
   

  push();
  translate(width * -0.15, height * -0.3);
 // rotateX(frameCount * 0.02);
  rotateZ(frameCount * 0.08);
  coins();
  pop();
  
  push();
  translate(width * 0, height * -0.3);
//  rotateX(frameCount * 0.02);
  rotateZ(frameCount * 0.08);
  coins();
  pop();
  
  push();
  translate(width * 0.15, height * -0.3);
//  rotateX(frameCount * 0.02);
  rotateZ(frameCount * 0.08);
  coins();
  pop();
 

  
  eHexagon();
  iHexagon();

  push();
  translate(width*-0.3, height*0.08);
  pointsEB();
  pop();
  
  push();
  translate(width*0.3, height*0.08);
  pointsDB();
  pop();
  
  push();
  translate(width*-0.3, height*-0.08);
  pointsEC();
  pop();
  
  push();
  translate(width*0.3, height*-0.08);
  pointsDC();
  pop();
//trigram();

  
//divideStalks();  
//divideEastAndWest();
//lineCast();
//DrawLine();
  
 

 

}












function pointsEB()
{

beginShape(POINTS);
//translate(-width*0.3, height*0);
rectMode(CENTER);


noStroke();
fill(255);  
  
n1 = rect(pE-pM, pE-pM, wS, hS);
push(); 
  fill(coinCountValue1);
n2 = rect(pE, pE-pM, wS, hS);
  pop();
n3 = rect(pE+pM, pE-pM, wS, hS);
n4 = rect(pE-pM, pE, wS, hS);
  push();  
fill(coinCountValue1);
n5 = rect(pE, pE, wS, hS);
   pop();
n6 = rect(pE+pM, pE, wS, hS);
n7 = rect(pE-pM, pE+pM, wS, hS);
  push();  
  fill(coinCountValue1);
n8 = rect(pE, pE+pM, wS, hS);
   pop();
n9 = rect(pE+pM, pE+pM, wS, hS);

endShape();

}

function pointsDB()
{

beginShape(POINTS);
//translate(width*0.6, height*0);
rectMode(CENTER);


noStroke();
fill(255);  
  
n1 = rect(pE-pM, pE-pM, wS, hS);
push(); 
  fill(coinCountValue1);
n2 = rect(pE, pE-pM, wS, hS);
  pop();
n3 = rect(pE+pM, pE-pM, wS, hS);
n4 = rect(pE-pM, pE, wS, hS);
  push();  
fill(coinCountValue1);
n5 = rect(pE, pE, wS, hS);
   pop();
n6 = rect(pE+pM, pE, wS, hS);
n7 = rect(pE-pM, pE+pM, wS, hS);
  push();  
  fill(coinCountValue1);
n8 = rect(pE, pE+pM, wS, hS);
   pop();
n9 = rect(pE+pM, pE+pM, wS, hS);
endShape();

}




function pointsEC()
{

beginShape(POINTS);
//translate(-width*0.3, height*0);
rectMode(CENTER);


noStroke();
fill(255);  
  
n1 = rect(pE-pM, pE-pM, wS, hS);
push(); 
  fill(coinCountValue1);
n2 = rect(pE, pE-pM, wS, hS);
  pop();
n3 = rect(pE+pM, pE-pM, wS, hS);
n4 = rect(pE-pM, pE, wS, hS);
  push();  
fill(coinCountValue1);
n5 = rect(pE, pE, wS, hS);
   pop();
n6 = rect(pE+pM, pE, wS, hS);
n7 = rect(pE-pM, pE+pM, wS, hS);
  push();  
  fill(coinCountValue1);
n8 = rect(pE, pE+pM, wS, hS);
   pop();
n9 = rect(pE+pM, pE+pM, wS, hS);

endShape();

}

function pointsDC()
{

beginShape(POINTS);
//translate(width*0.6, height*0);
rectMode(CENTER);


noStroke();
fill(255);  
  
n1 = rect(pE-pM, pE-pM, wS, hS);
push(); 
  fill(coinCountValue1);
n2 = rect(pE, pE-pM, wS, hS);
  pop();
n3 = rect(pE+pM, pE-pM, wS, hS);
n4 = rect(pE-pM, pE, wS, hS);
  push();  
fill(coinCountValue1);
n5 = rect(pE, pE, wS, hS);
   pop();
n6 = rect(pE+pM, pE, wS, hS);
n7 = rect(pE-pM, pE+pM, wS, hS);
  push();  
  fill(coinCountValue1);
n8 = rect(pE, pE+pM, wS, hS);
   pop();
n9 = rect(pE+pM, pE+pM, wS, hS);

endShape();

}






function trigram()
{
beginShape(QUAD_STRIP);


vertex(30, 20);
vertex(30, 75);
vertex(50, 20);
vertex(50, 75);
  
vertex(65, 20);
vertex(65, 75);
vertex(85, 20);
vertex(85, 75);
endShape();

endShape();
}  
  
function solid()
{
//  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(70, 70, 70);
  pop();
}

function iHexagon()
{
  stroke(55,173,189);
 // angleMode(DEGREES);
  push();
  
  fill(i1);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(PI/3);
  polygon(-68, 0, 34, 3);
  pop();
   
    push();
  fill(i2);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((2*PI)/3);
  polygon(-68, 0, 34, 3);
  pop();
  
  push();
  fill(i3);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(PI);
  polygon(-68, 0, 34, 3);
  pop();
  
  push();
  fill(i4);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((4*PI)/3);
  polygon(-68, 0, 34, 3);
  pop();
  
  push();
  fill(i5);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((5*PI)/3);
  polygon(-68, 0, 34, 3);
  pop();
  
  push();
  fill(i6);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(2*PI);
  polygon(-68, 0, 34, 3);
  pop();
  
}

function eHexagon()
{
  stroke(55,173,189);
// angleMode(DEGREES);
  push();
  fill(e1);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(PI/3);
  polygon(-110, 0, 55, 3);
  pop();
   
    push();
  fill(e2);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((2*PI)/3);
  polygon(-110, 0, 55, 3);
  pop();
  
  push();
  fill(e3);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(PI);
  polygon(-110, 0, 55, 3);
  pop();
  
  push();
  fill(e4);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((4*PI)/3);
  polygon(-110, 0, 55, 3);
  pop();
  
  push();
  fill(e5);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((5*PI)/3);
  polygon(-110, 0, 55, 3);
  pop();
  
  push();
  fill(e6);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(2*PI);
  polygon(-110, 0, 55, 3);
  pop();
  
}






function polygon(x, y, radius, npoints, pt) {
  let angle = TWO_PI / npoints;
  beginShape();
  translate(radius, 0); 
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    let pt = vertex(sx, sy, 0);
  }

  endShape(CLOSE);
}


 
   



//let DivideStalks = 

function divideStalks(yarrowStalks) //1///////////////////////////
{
 
// Divide 49 stalks into eastpile westpile
// Subtract one from westpile put in handpile

WestPile = Math.floor((Math.random() * yarrowStalks) + 1);
EastPile = yarrowStalks - WestPile;
WestPile = WestPile - 1;
HandPile = 1;
  

}

//let DivideEastAndWest =         
function divideEastAndWest(divideEastAndWest) //2////////////////////////
{
EastRemainder = (EastPile % 4);
WestRemainder = (WestPile % 4);
if (EastRemainder == 0) EastRemainder = 4;
if (WestRemainder == 0) WestRemainder = 4;
HandPile = HandPile + EastRemainder + WestRemainder;
}

//let LineCast = 
function LineCast() //3///////////////////////////////////////////////
{

//This function creates the pictures of lines as broken or unbroken
//and changing or unchanging 

Stalks = 49; //Remove one stalk and set it aside 
  

divideStalks(Stalks);
// Divide 49 Yarrow stalks into two piles at random: East and West
// Subtract a single stalk from the West and put it in your hand 
// between thumb and pointer finger 
divideEastAndWest();
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
divideStalks(Stalks);
// Now divide the pile of stalks before you into two piles again
// And remove one from the West pile.
divideEastAndWest();
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
divideStalks(Stalks);
// You now have 35, 31, or 39 stalks before you
// Divide them into East and West piles for a third time
divideEastAndWest();
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
if(LineValue == 6) {DrawLine=('weak',true);}
if(LineValue == 7) {DrawLine=('strong',false);}
if(LineValue == 8) {DrawLine=('weak',false);}
if(LineValue == 9) {DrawLine=('strong',true);}
  
 
}// End LineCast Function

//let DrawLine = 
function DrawLine(lines,changing) //4///////////////////////////////////
{
//if (changing && lines == 'weak')   {asciipic = '===&nbsp;o&nbsp;==='}
//if (changing && lines == 'strong') {asciipic = '====x===='}
//if (!changing && lines == 'strong') {asciipic = '========='}
//if (!changing && lines == 'weak') {asciipic = '===&nbsp;&nbsp;&nbsp;==='}
if (changing && lines == 'weak')   {asciipic = 1;}
if (changing && lines == 'strong') {asciipic = 55;}
if (!changing && lines == 'strong') {asciipic = 144;}
if (!changing && lines == 'weak') {asciipic = 233;}
}
  

function ngon(n, x, y, d) {

  beginShape();

  translate(d/2, 0);
  for (let i = 0; i < n + 1; i++) {
    angle = TWO_PI / n * i;
    px = x + sin(angle) * d / 2;
    py = y - cos(angle) * d / 2;
    vertex(px, py, 0);
  }
  for (let i = 0; i < n + 1; i++) {
    angle = TWO_PI / n * i;
    px = x + sin(angle) * d / 4;
    py = y - cos(angle) * d / 4;
    vertex(px, py, 0);
  }
  endShape();

}



function coins()
{
  
 if (CountValue1 == 2) {coinCountValue1 = color(55,173,198);} 
else if (CountValue1 == 3) {coinCountValue1 = color(255);} 
  
 if (CountValue2 == 2) {coinCountValue2 = color(55,173,198);} 
else if (CountValue2 == 3) {coinCountValue2 = color(255);}   
  
 if (CountValue3 == 2) {coinCountValue3 = color(55,173,198);} 
else if (CountValue3 == 3) {coinCountValue3 = color(255);}   

//  beginShape();
//  push();
  noStroke(0);
     specularMaterial(250);
 //   ambientMaterial(250);
 // fill(coinCountValue2);
//  rotateX(frameCount * 0.02);
//  rotateZ(frameCount * 0.02);
  cylinder(34, 8, 24, 1, 1, 1);
//  pop();
//  endShape();   
 
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
print (asciipic);    
//print (LineCast);  
//print(int(0));
//print (changing);  
print (LineCast); 
}   






////////////////////////////////////////////////////////////////
var myp5 = new p5(sketch);
var sketch = function(p)
{
  
  let x = 100; 
  let y = 100;

  p.setup = function() {
    p.createCanvas(windowWidth, windowHeight, WEBGL);
    
  }

  p.draw = function() {

    //    p.background(79, 198, 218);
    p.background(1, 78, 106);
    p.fill(0);
    //    p.rect(x,y,50,50);
    
    
  }
}

var myp5 = new p5(sketch);
//////////////////////////////////////////////////////////
