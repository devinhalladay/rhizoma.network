function setup() {
  var canvas = createCanvas(windowWidth * .3, windowHeight);
  canvas.parent('sketch')
}

function windowResized() { resizeCanvas(windowWidth * .3, windowHeight); }

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);

  stroke(r,g,b);
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}