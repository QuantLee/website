var w = 1400;
var h = 800;
var drift = 0.001
var variance = 0.05;
var timeline = 5;
var limit = 50

var dot = {
  x: 0,
  y: h*3/5
}

var col = {
  r: 255,
  g: 255,
  b: 255
}

function setup(){
  createCanvas(w,h);
  background(0);
}

function draw(){
  stroke(col.r,col.g,col.b);
  x = dot.x;
  y = dot.y;
  if (dot.y > h-limit){
    dot.y = dot.y - 50;
  }
  if (dot.y < 50){
    dot.y = dot.y + 50;
  }
  dot.x = dot.x + timeline;
  dot.y = dot.y * exp(-drift +random(-variance,variance));
  strokeWeight(2);
  line(x,y,dot.x,dot.y);

}






