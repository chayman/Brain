var img;

var ball={
  x:300,
  y:350,
  diameter:20
};
var tri={
  x1:0,
  y1:0,
  x2:0,
  y2:0,
  x3:0,
  y3:0
  
};


function preload() {
  img = loadImage("brain.png");
}
function setup() {
  createCanvas(605,660);

}

function draw() {
  background(255);
  image(img,0,100,605,486);
  textSize(45);
  fill(200,250,180);
  text("the loving brain",150,70);
      textSize(15);
  fill(200,180,255);
    text("instructions:",30,570);
  text("move the cursor to see different stages of attention",30,590);
      text("hold down the mouse to watch the bond get stronger",20,610);
       text("and press the left and right arrows to see sparks flying!",45,630);
  if(keyCode ===LEFT_ARROW){
  push();
  translate(width*0.9, height*0.65);
  rotate(frameCount / -100.0);
  fill(250,255,150,200);
  star1(0, 0, 10, 20, 5);
  pop();
    push();
  translate(width*0.75, height*0.4);
  rotate(frameCount / -100.0);
  fill(250,255,150,200);
  star2(0, 0, 10, 20, 5);
  pop();
      push();
  translate(width*0.4, height*0.5);
  rotate(frameCount / -100.0);
  fill(250,255,150,200);
  star3(0, 0, 10, 20, 5);
  pop();

    push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / -100.0);
  fill(250,255,150,200);
  star4(0, 0, 10, 20, 5);
  pop();

    push();
  translate(width*0.4, height*0.3);
  rotate(frameCount / -100.0);
  fill(250,255,150,200);
  star5(0, 0, 10, 20, 5);
  pop();
      push();
  translate(width*0.6, height*0.78);
  rotate(frameCount / -100.0);
  fill(250,255,150,200);
  star6(0, 0, 10, 20, 5);
  pop();

    push();
  translate(width*0.7, height*0.24);
  rotate(frameCount / -100.0);
    fill(250,255,150,200);
  star7(0, 0, 10, 20, 5);
  pop();
      push();
  translate(width*0.1, height*0.65);
  rotate(frameCount / -100.0);
  fill(250,255,150,200);
  star8(0, 0, 10, 20, 5);
  pop();

    push();
  translate(width*0.6, height*0.6);
  rotate(frameCount / -100.0);
  fill(250,255,150,200);
  star9(0, 0, 10, 20, 5);
  pop();
}
renderBall();
ballExpand();
ballText();
renderTriangle();
triangleMove();
triangleChange();
triangleText();
starText();


  
}



function renderBall (){
  fill(200,255,250,200);
  ellipse(ball.x,ball.y,ball.diameter,ball.diameter);

}

function ballExpand(){
  if(mouseIsPressed){
  ball.diameter=ball.diameter+1;
  }else{
    ball.diameter=ball.diameter;
  }
}
function ballText(){
  if (mouseIsPressed){
      textSize(15);
  fill(255,51,153);
  text("oxytocin for bonding",20,135);
  }
}
function renderTriangle(){

 fill(200,250,180,200);
 triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3,tri.y3);
  
}
function triangleMove(){
  tri.x1=mouseX;
  tri.x2=mouseX+28;
  tri.x3=mouseX+56;
  tri.y1=mouseY;
  tri.y2=mouseY-55;
  tri.y3=mouseY;

  
}
function triangleChange(){
    if(tri.x1>=150){
tri.x1=10;
tri.x2=90;


    }
}

function triangleText(){
  if (tri.y2>=150){
      textSize(15);
  fill(255,51,153);
  text("seratonin for attention",20,120);
  }
}
function starText(){
  if(keyCode ===LEFT_ARROW){
      textSize(15);
  fill(255,51,153);
  text("dopamine for sparks",20,150);
  }
}
function star1(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function star2(x,y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function star3(x,y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function star4(x,y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function star5(x,y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function star6(x,y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function star7(x,y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function star8(x,y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function star9(x,y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}