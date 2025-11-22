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

  let skin = color(238, 206, 184);
  fill(skin);
  stroke(90, 70, 60, 130);
  strokeWeight(2.5);
  ellipse(300, 220, 210, 250);

  noFill();
  stroke(200, 160, 140, 80);
  strokeWeight(12);
  arc(300, 275, 160, 110, radians(200), radians(340));

  stroke(30);
  strokeWeight(2);
  fill(20);
  beginShape();
  vertex(205, 120);
  bezierVertex(240, 70, 360, 70, 395, 120);
  bezierVertex(410, 180, 408, 220, 395, 245);
  bezierVertex(360, 185, 330, 185, 310, 205);
  bezierVertex(295, 188, 265, 190, 248, 205);
  bezierVertex(235, 195, 220, 205, 210, 230);
  bezierVertex(205, 200, 198, 170, 205, 120);
  endShape(CLOSE);

  stroke(30);
  strokeWeight(5);
  line(230, 185, 275, 180);
  line(325, 180, 370, 185);

  stroke(40);
  strokeWeight(3);
  fill(255);
  ellipse(255, 215, 66, 52);
  fill(70, 45, 20);
  ellipse(265, 220, 34, 34);
  fill(0);
  ellipse(270, 223, 20, 20);
  fill(255, 255, 255, 200);
  ellipse(277, 216, 8, 8);

  fill(255);
  stroke(40);
  strokeWeight(3);
  ellipse(345, 215, 66, 52);
  fill(70, 45, 20);
  ellipse(335, 220, 34, 34);
  fill(0);
  ellipse(330, 223, 20, 20);
  fill(255, 255, 255, 200);
  ellipse(323, 216, 8, 8);

  stroke(160, 120, 110, 140);
  strokeWeight(2);
  line(300, 230, 300, 238);
  noFill();
  stroke(150, 95, 90, 170);
  strokeWeight(3);
  arc(300, 255, 60, 26, radians(200), radians(340));
  noStroke();
  fill(255, 155, 150, 120);
  circle(255, 245, 14);
  circle(345, 245, 14);
  stroke(60, 50, 45, 120);
  strokeWeight(2);

  fill(skin);
  ellipse(195, 225, 28, 44);
  ellipse(405, 225, 28, 44);

  let finger = color(242, 205, 190);
  stroke(120, 90, 80, 140);
  strokeWeight(2.5);
  fill(finger);

  push();
  translate(440, 300);
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

  stroke(0, 0, 0, 40);
  strokeWeight(2);
  noFill();
  rect(5, 5, width - 10, height - 10, 12);
}
