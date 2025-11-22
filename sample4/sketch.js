const FPS = 30;

function setup() {
  createCanvas(600, 400);
  frameRate(FPS);
  randomSeed(42);
  colorMode(HSB, 360, 100, 100, 255);
}

function draw() {
  const t = millis() / 1000;

  noStroke();

  const bgHue = (t * 18) % 360;
  fill(bgHue, 8, 100); rect(0, 0, width/2, height/2);
  fill((bgHue+40)%360, 8, 100); rect(width/2, 0, width/2, height/2);
  fill((bgHue+80)%360, 8, 100); rect(0, height/2, width/2, height/2);
  fill((bgHue+120)%360, 8, 100); rect(width/2, height/2, width/2, height/2);

  const bgColors = [
    [330,60,100],[200,60,100],[120,50,100],[270,45,100],[35,60,100]
  ];
  function bgCircle(x,y,d,c,a){
    fill(c[0], c[1], c[2], a);
    circle(x,y,d);
  }
  for (let i=0;i<20;i++){
    const c = bgColors[i % bgColors.length];
    const x = 40 + (i*97)%560 + sin(t*0.7 + i)*6;
    const y = 40 + (i*53)%320 + cos(t*0.9 + i)*6;
    const d = 110 + (i*13)%170 + sin(t + i)*8;
    bgCircle(x, y, d, c, 70);
  }

  const P = [
    [0,75,95],[35,80,100],[55,80,100],[125,60,85],
    [210,70,85],[270,55,85],[330,55,100],[0,0,10]
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
  staff(160,110,-22,740,12,P[7],200);
  staff(300,210,-18,740,12,P[7],200);
  staff(440,310,-24,740,12,P[7],200);

  noStroke();
  fill((P[0][0]+t*30)%360, P[0][1], P[0][2], 180); triangle(40,360,180,260,300,220);
  fill((P[1][0]+t*25)%360, P[1][1], P[1][2], 180); quad(60,340,200,250,300,220,120,380);
  fill((P[4][0]+t*22)%360, P[4][1], P[4][2], 180); triangle(520,40,420,160,300,220);
  fill((P[5][0]+t*20)%360, P[5][1], P[5][2], 180); quad(560,60,460,160,320,220,580,120);
  fill((P[2][0]+t*28)%360, P[2][1], P[2][2], 180); triangle(250,20,350,40,300,220);
  fill((P[3][0]+t*18)%360, P[3][1], P[3][2], 180); quad(600,360,520,320,340,240,600,260);

  function note(x,y,d,idx,up,phase){
    const wobbleY = sin(t*2.0 + phase) * 8;
    const wobbleX = cos(t*1.6 + phase) * 4;
    const sizePulse = d * (0.85 + 0.3*sin(t*2.2 + phase));
    const hueShift = (P[idx][0] + t*60 + phase*20) % 360;

    stroke(P[7][0],P[7][1],P[7][2],220);
    fill(hueShift, P[idx][1], P[idx][2], 230);
    circle(x+wobbleX, y+wobbleY, sizePulse);

    noStroke();
    fill(P[7][0],P[7][1],P[7][2],220);
    if(up) rect(x+wobbleX + sizePulse*0.35, y+wobbleY - sizePulse*0.9, 2, sizePulse*1.4);
    else   rect(x+wobbleX - sizePulse*0.35-2, y+wobbleY - sizePulse*0.5, 2, sizePulse*1.4);
  }

  note(200,150,18,6,true,0.3);
  note(270,190,18,4,false,1.1);
  note(340,130,18,0,true,2.0);
  note(420,220,18,3,false,2.7);
  note(140,250,18,5,true,3.5);
  note(500,290,18,1,false,4.2);

  const spl = [
    [120,300,6,0],[160,90,5,6],[460,90,5,4],[520,180,6,1],
    [260,80,4,2],[340,330,5,5],[420,60,4,6],[90,200,5,3],
    [540,320,6,0],[300,70,4,6],[380,260,4,4],[220,300,5,1]
  ];
  for (let i=0;i<spl.length;i++){
    const s=spl[i], c=P[s[3]];
    const drift = sin(t*1.8 + i)*3;
    const pulse = s[2] * (0.9 + 0.4*sin(t*3 + i));
    fill((c[0]+t*50+i*15)%360, c[1], c[2], 220);
    circle(s[0]+drift, s[1]-drift, pulse);
  }

    // function keyPressed() {
    //     if (key === 'g' || key === 'G') {
    //         saveGif('abstract_score.gif', 10, { delay: 1, units: 'seconds' });
    //     }
    // }
}
