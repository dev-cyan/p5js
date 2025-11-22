let headAngle = 0;
let headAVel = 0;
let handYOffset = 0;
let handYVel = 0;

let lpOx = 0, lpOy = 0;
let rpOx = 0, rpOy = 0;

let burstStart = -9999;
let burstX = 0, burstY = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(245, 236, 226);

  stroke(60, 50, 45, 120);
  strokeWeight(2);
  fill(22, 60, 130);
  rect(170, 270, 260, 120, 36);

  fill(245);
  push();
  translate(170, 270);
  beginShape();
  vertex(0, 0);
  bezierVertex(-20, 10, -30, 50, -15, 110);
  vertex(35, 110);
  bezierVertex(25, 70, 25, 30, 35, 0);
  endShape(CLOSE);
  pop();

  push();
  translate(430, 270);
  beginShape();
  vertex(0, 0);
  bezierVertex(20, 10, 30, 50, 15, 110);
  vertex(-35, 110);
  bezierVertex(-25, 70, -25, 30, -35, 0);
  endShape(CLOSE);
  pop();

  stroke(240);
  strokeWeight(3);
  line(300, 270, 300, 390);
  stroke(230);
  strokeWeight(8);
  line(170, 388, 430, 388);

  noFill();
  stroke(255);
  strokeWeight(10);
  circle(225, 310, 40);
  stroke(255);
  strokeWeight(4);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(255);
  noStroke();
  textSize(22);
  text("S", 225, 310);
  stroke(60, 50, 45, 120);
  strokeWeight(2);

  fill(245);
  arc(300, 285, 110, 70, radians(200), radians(340), CHORD);

  headAngle += headAVel;
  headAngle = constrain(headAngle, -0.25, 0.25);

  push();
  translate(300, 220);
  rotate(headAngle);

  let skin = color(238, 206, 184);
  fill(skin);
  stroke(90, 70, 60, 130);
  strokeWeight(2.5);
  ellipse(0, 0, 210, 250);

  noFill();
  stroke(200, 160, 140, 80);
  strokeWeight(12);
  arc(0, 55, 160, 110, radians(200), radians(340));

  stroke(30);
  strokeWeight(2);
  fill(20);
  beginShape();
  vertex(-95, -100);
  bezierVertex(-60, -150, 60, -150, 95, -100);
  bezierVertex(110, -40, 108, 0, 95, 25);
  bezierVertex(60, -35, 30, -35, 10, -15);
  bezierVertex(-5, -32, -35, -30, -52, -15);
  bezierVertex(-65, -25, -80, -15, -90, 10);
  bezierVertex(-95, -20, -102, -50, -95, -100);
  endShape(CLOSE);

  stroke(30);
  strokeWeight(5);
  line(-70, -35, -25, -40);
  line(25, -40, 70, -35);

  let leftEyeC  = createVector(-45, -5);
  let rightEyeC = createVector(45, -5);

  let m = createVector(mouseX, mouseY);
  let toLocal = p5.Vector.sub(m, createVector(300, 220));
  let cosA = cos(-headAngle), sinA = sin(-headAngle);
  let lx = toLocal.x * cosA - toLocal.y * sinA;
  let ly = toLocal.x * sinA + toLocal.y * cosA;
  let mLocal = createVector(lx, ly);

  function targetPupilOffset(eyeCenter) {
    let v = p5.Vector.sub(mLocal, eyeCenter);
    if (v.mag() > 1e-3) v.setMag(min(v.mag(), 12));
    return v;
  }

  let lTarget = targetPupilOffset(leftEyeC);
  let rTarget = targetPupilOffset(rightEyeC);
  let k = 0.18;
  lpOx = lerp(lpOx, lTarget.x, k);
  lpOy = lerp(lpOy, lTarget.y, k);
  rpOx = lerp(rpOx, rTarget.x, k);
  rpOy = lerp(rpOy, rTarget.y, k);

  stroke(40);
  strokeWeight(3);
  fill(255);
  ellipse(leftEyeC.x, leftEyeC.y, 66, 52);
  fill(70, 45, 20);
  ellipse(leftEyeC.x + lpOx*0.6, leftEyeC.y + lpOy*0.6, 34, 34);
  fill(0);
  ellipse(leftEyeC.x + lpOx, leftEyeC.y + lpOy, 20, 20);
  fill(255, 255, 255, 200);
  ellipse(leftEyeC.x + lpOx - 7, leftEyeC.y + lpOy - 7, 8, 8);

  stroke(40);
  strokeWeight(3);
  fill(255);
  ellipse(rightEyeC.x, rightEyeC.y, 66, 52);
  fill(70, 45, 20);
  ellipse(rightEyeC.x + rpOx*0.6, rightEyeC.y + rpOy*0.6, 34, 34);
  fill(0);
  ellipse(rightEyeC.x + rpOx, rightEyeC.y + rpOy, 20, 20);
  fill(255, 255, 255, 200);
  ellipse(rightEyeC.x + rpOx - 7, rightEyeC.y + rpOy - 7, 8, 8);

  stroke(160, 120, 110, 140);
  strokeWeight(2);
  line(0, 10, 0, 18);
  noFill();
  stroke(150, 95, 90, 170);
  strokeWeight(3);
  arc(0, 35, 60, 26, radians(200), radians(340));
  noStroke();
  fill(255, 155, 150, 120);
  circle(-45, 25, 14);
  circle(45, 25, 14);
  stroke(60, 50, 45, 120);
  strokeWeight(2);

  fill(skin);
  ellipse(-105, 5, 28, 44);
  ellipse(105, 5, 28, 44);

  pop();

  handYOffset += handYVel;
  handYOffset = constrain(handYOffset, -40, 40);

  let finger = color(242, 205, 190);
  stroke(120, 90, 80, 140);
  strokeWeight(2.5);
  fill(finger);

  push();
  translate(440, 300 + handYOffset);
  rotate(radians(8));

  ellipse(-8, 10, 55, 38);

  push();
  rotate(radians(-22));
  rect(8, -55, 18, 80, 10);
  stroke(180, 140, 130, 120);
  line(12, -20, 22, -23);
  line(11, 4, 21, 1);
  pop();

  push();
  rotate(radians(22));
  rect(-4, -55, 18, 80, 10);
  line(0, -20, 10, -23);
  line(-1, 4, 9, 1);
  pop();

  push();
  rotate(radians(70));
  rect(-18, -30, 16, 45, 10);
  pop();

  pop();

  drawBurst();

  stroke(0, 0, 0, 40);
  strokeWeight(2);
  noFill();
  rect(5, 5, width - 10, height - 10, 12);
}

function mousePressed() {
  burstStart = frameCount;
  burstX = mouseX;
  burstY = mouseY;
}

function drawBurst() {
  let t = frameCount - burstStart;
  if (t < 0 || t > 45) return;

  push();
  translate(burstX, burstY);

  let n = 18;
  let radius = t * 4;
  let fade = map(45 - t, 0, 45, 0, 180);

  for (let i = 0; i < n; i++) {
    let ang = i * TWO_PI / n;
    let jitter = sin((t + i * 7) * 0.25) * 3;
    let px = cos(ang) * (radius + jitter);
    let py = sin(ang) * (radius + jitter);

    let r = 180 + (i * 23) % 75;
    let g = 120 + (i * 37) % 90;
    let b = 100 + (i * 11) % 130;

    noStroke();
    fill(r, g, b, fade);
    ellipse(px, py, 8, 8);

    noFill();
    stroke(r, g, b, fade * 0.6);
    strokeWeight(1);
    ellipse(px, py, 14, 14);
  }
  pop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW)  headAVel = -0.02;
  if (keyCode === RIGHT_ARROW) headAVel =  0.02;
  if (keyCode === UP_ARROW)    handYVel = -1.8;
  if (keyCode === DOWN_ARROW)  handYVel =  1.8;

//   if (key === 'g' || key === 'G') {
//     if (typeof saveGif === 'function') {
//       saveGif('20213048p5js', 600, { units: 'frames' });
//     }
//   }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) headAVel = 0;
  if (keyCode === UP_ARROW   || keyCode === DOWN_ARROW)  handYVel = 0;
}