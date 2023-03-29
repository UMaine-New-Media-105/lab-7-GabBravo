let xL = 10;
let yL = 10;
let xR = -10;
let yR = 10;

let arrayOfColors = ["lavender", "lightblue", "pink", "darkseagreen"];

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  let offset = 42.5;
  let randomColor = random(arrayOfColors);

  for (let tLbR = 0; tLbR < 40; tLbR++) {
    topLeft(xL, yL, randomColor);
    xL += offset;
    yL += offset;
  }

  for (let tRbL = 0; tRbL < 40; tRbL++) {
    topRight(xR, yR, randomColor);
    xR -= offset;
    yR += offset;
  }
}

function topLeft(xL, yL, color) {
  push();
  translate(xL, yL);
  fill(color);
  ellipse(20, 20, 40);
  pop();
}

function topRight(xR, yR, color) {
  push();
  translate(xR, yR);
  fill(color);
  ellipse(380, 20, 40);
  pop();
}
