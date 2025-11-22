function setup() {
  createCanvas(600, 400);
  noLoop();
  randomSeed(42);
}

function draw() {
  noStroke();

  fill(255, 240, 245); rect(0, 0, width/2, height/2);
  fill(230, 245, 255); rect(width/2, 0, width/2, height/2);
  fill(240, 255, 230); rect(0, height/2, width/2, height/2);
  fill(255, 250, 210); rect(width/2, height/2, width/2, height/2);

  const bgColors = [
    [255,100,150],[80,180,250],[120,220,140],[180,120,220],[255,180,70]
  ];
  function bgCircle(x,y,d,c,a){ fill(c[0],c[1],c[2],a); circle(x,y,d); }
  for (let i=0;i<20;i++){
    const c = bgColors[i % bgColors.length];
    bgCircle(
      40 + (i*97)%560,
      40 + (i*53)%320,
      110 + (i*13)%170,
      c, 60
    );
  }

  const P = [
    [242,62,62],[255,176,34],[255,221,64],[62,162,96],
    [54,118,210],[121,75,200],[255,105,180],[25,25,25]
  ];

  function staff(x0,y0,angleDeg,length,gap,color,alpha){
    const th = radians(angleDeg);
    const nx = Math.cos(th + Math.PI/2) * gap;
    const ny = Math.sin(th + Math.PI/2) * gap;
    const dx = Math.cos(th) * length;
    const dy = Math.sin(th) * length;
    stroke(color[0],color[1],color[2],alpha);
    for(let i=-2;i<=2;i++){
      const sx = x0 + nx*i - dx/2;
      const sy = y0 + ny*i - dy/2;
      line(sx, sy, sx+dx, sy+dy);
    }
  }
  staff(160,110,-22,740,12,P[7],180);
  staff(300,210,-18,740,12,P[7],180);
  staff(440,310,-24,740,12,P[7],180);

  noStroke();
  fill(P[0][0],P[0][1],P[0][2],200); triangle(40,360,180,260,300,220);
  fill(P[1][0],P[1][1],P[1][2],200); quad(60,340,200,250,300,220,120,380);
  fill(P[4][0],P[4][1],P[4][2],200); triangle(520,40,420,160,300,220);
  fill(P[5][0],P[5][1],P[5][2],200); quad(560,60,460,160,320,220,580,120);
  fill(P[2][0],P[2][1],P[2][2],200); triangle(250,20,350,40,300,220);
  fill(P[3][0],P[3][1],P[3][2],200); quad(600,360,520,320,340,240,600,260);

  function note(x,y,d,idx,up){
    const c=P[idx];
    stroke(P[7][0],P[7][1],P[7][2],200);
    fill(c[0],c[1],c[2],230); circle(x,y,d);
    stroke(0,0,0,0); fill(P[7][0],P[7][1],P[7][2],220);
    if(up) rect(x+d*0.35, y-d*0.9, 2, d*1.4);
    else   rect(x-d*0.35-2, y-d*0.5, 2, d*1.4);
  }
  note(200,150,18,6,true);
  note(270,190,18,4,false);
  note(340,130,18,0,true);
  note(420,220,18,3,false);
  note(140,250,18,5,true);
  note(500,290,18,1,false);

  const spl = [
    [120,300,6,0],[160,90,5,6],[460,90,5,4],[520,180,6,1],
    [260,80,4,2],[340,330,5,5],[420,60,4,6],[90,200,5,3],
    [540,320,6,0],[300,70,4,6],[380,260,4,4],[220,300,5,1]
  ];
  for (let i=0;i<spl.length;i++){
    const s=spl[i], c=P[s[3]];
    noStroke(); fill(c[0],c[1],c[2],220); circle(s[0],s[1],s[2]);
  }
}