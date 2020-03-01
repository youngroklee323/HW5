//aim
var aimX = 400;
var aimY = 20;
var aimW = 120;
var aimH = 120;

var aimSpeedX = 3;
var aimSpeedX2 = 2.4;
var aimSpeedY = -5;

var aimmingS = 0.4;
var aimmingSd = 0.4;
var aimStop = 0;

var crosshairSize = 6;

//ammo

var ammoX = 0;
var ammoY = 500;

var ammoW = 40;
var ammoH = 40;

var ammoSpeed = 0;
var ammoAccel = 0;
var ammoSize = 0

var ammoDeSize = 40

var ammoR = 255;
var ammoG = 255;
var ammoB = 255;
var ammoV = 255;

//ammo hit
var ammohitX = 0;
var ammohitY = 0;
var hit = false;
var explosionV = 255;


//reload gauge
var reloadW = 0;
var reloadS = 2;
var arcreloadW = 0;
var arcreloadS = 2;
var arcreloadV = 125;
//reload text
var textV = 0;
var textT = false;

//tank
var tankX = 800;
var tankY = 170;
var tankY2 = 150;
var tankW = 640;
var tankH = 304;
var tankSpeed1 = 1;
var tankSpeed2 = 10;
var tankSpeed3 = 15;

var score = 0;
var life = 5;

//start end
var startbutton = true



function preload() {
  tank = loadImage('Tank.png');
  m4A2 = loadImage('m4.png');
  backgroundimg = loadImage('Background.png');
  tankEX = loadImage('TankExplosion2.png');
  soundFormats("mp3");
  shot = loadSound("exlposion.mp3");
  tankDest = loadImage("tankDestoryed.png");
}

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);




}

function draw() {
  if (startbutton) {
    startscreen();
  }
  if (startbutton === false) {
    gameplay();
  }

  if (life === 0) {
    endscreen();
  }
}

function endscreen() {
  rect(0, 0, width, height);
  text('GAME OVER', 0, 0, 350, 200);
}


function startscreen() {
  rect(0, 0, width, height);
  text('press S to start', 350, 200);

}


function gameplay() {
  // tint(255,100);
  image(backgroundimg, 0, 0, 1500, 475);
  image(tank, tankX, tankY, tankW / 5.5, tankH / 5.5);
  tankX = tankX - tankSpeed1;
  fill(255);
  noStroke();
  text('score', 10, 10, 20, 20);
  text(score, 10, 30, 20, 20);
  text('life', 50, 10, 20, 20, );
  text(life, 50, 30, 20, 20);

  if (tankX < -100) {
    tankX = width;
    life = life - 1;
  }
  // background(220);

  //fielgun demo
  // rect(aimX-20,350,40,40);



  //arc reload gauge
  //   noFill();
  //   strokeWeight(4);
  //   stroke(255, 255, 0, arcreloadV);
  //   arc(aimX, aimY, aimW + 10, aimH + 10, 270, arcreloadW - 90);
  //   arcreloadW = arcreloadW + arcreloadS;

  //   //arc reload stop
  //   if (arcreloadW > 356) {
  //     arcreloadS = 0;
  //   }
  //   //aim appearance
  //   noFill();
  //   stroke(0, 255, 0);
  //   strokeWeight(2);


  //   //aim   
  //   ellipse(aimX, aimY, aimW, aimH);
  //   aimW = aimW - aimmingS;
  //   aimH = aimH - aimmingS;

  //   //crosshair
  //   stroke(255)
  //   line(aimX, aimY, aimX - crosshairSize, aimY + crosshairSize);
  //   line(aimX, aimY, aimX + crosshairSize, aimY + crosshairSize);

  //ammo
  // filter(BLUR);
  fill(ammoR, ammoG, ammoB, ammoV);
  noStroke();
  ellipse(ammoX, ammoY, ammoW, ammoH);
  ammoY = ammoY - ammoSpeed;
  ammoSpeed = ammoSpeed - ammoAccel;
  ammoW = ammoW - ammoSize;
  ammoH = ammoH - ammoSize;
  



  // rect reload gauge stop
  if (reloadW == 100) {
    reloadS = aimStop;
  }

  //minimum aim size  
  if (aimW < 30) {
    aimmingS = aimStop;
  }

  //ammo hit color
  if (ammoW < 8) {
    ammoV = 0;
  }

  //tank hit
  if (ammoW === 8 && ammoX > tankX + 35 && ammoX < tankX + 85) {
    // image(tankEX, tankX, tankY - 180, tankW / 2, tankH);
    shot.play();
    hit = true;
    score = score + 1;
  }


  //   //explosion image and tank stop
  if (hit === true) {
    // image(tankDest, tankX, tankY, tankW / 4, tankH / 4);
    // tint(255,explosionV);
    image(tankEX, tankX, tankY - 90, tankW / 4, tankH / 2);
    tankSpeed1 = 0;
    explosionV = explosionV - 10;
    // tank = tankDestoryed;
    // explosionV = explosionV -1 ;
  }

  //aim key control
  if (keyIsDown(LEFT_ARROW)) {
    aimX = aimX - aimSpeedX;
    aimW = 120;
    aimH = 120;
    aimmingS = aimmingSd;
    // if (aimX < 0 ){
    // aimSpeedX = 0;
    // }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    aimX = aimX + aimSpeedX2;
    aimW = 120;
    aimH = 120;
    aimmingS = aimmingSd;
  }
  if (keyIsDown(DOWN_ARROW)) {
    aimY = aimY - aimSpeedY;
    aimW = 120;
    aimH = 120;
    aimmingS = aimmingSd;
  }
  if (keyIsDown(UP_ARROW)) {
    aimY = aimY + aimSpeedY;
    aimW = 120;
    aimH = 120;

    aimmingS = aimmingSd;
  }

  //aim in screen
  if (aimX < 0) {
    aimX = 0;
  }
  if (aimX > width) {
    aimX = width;
  }
  if (aimY < 150) {
    aimY = 150;
  }
  if (aimY > height - 200) {
    aimY = height - 200;
  }
  noFill();
  strokeWeight(4);
  stroke(255, 255, 0, arcreloadV);
  arc(aimX, aimY, aimW + 10, aimH + 10, 270, arcreloadW - 90);
  arcreloadW = arcreloadW + arcreloadS;

  //arc reload stop
  if (arcreloadW > 356) {
    arcreloadS = 0;
  }
  //aim appearance
  noFill();
  stroke(0, 255, 0);
  strokeWeight(2);


  //aim   
  ellipse(aimX, aimY, aimW, aimH);
  aimW = aimW - aimmingS;
  aimH = aimH - aimmingS;

  //crosshair
  stroke(255)
  line(aimX, aimY, aimX - crosshairSize, aimY + crosshairSize);
  line(aimX, aimY, aimX + crosshairSize, aimY + crosshairSize);

  // tint(255,255);
  image(m4A2, aimX - 320, height - 250, 640, 360);
  //reload gauge
  noFill();
  //   stroke(255);
  //   rect(width - 120, height - 40, 100, 20);
  //   fill(255)
  //   rect(width - 120, height - 40, reloadW, 20);
  //   reloadW = reloadW + reloadS;

  //   textSize(10);
  //   strokeWeight(0.5);
  //   fill(255, textV)
  //   text('Press "R"to Reload', width - 120, height - 50);
  if (textT) {
    textSize(10);
    fill(255);
    noStroke();
    text('Press R to reload', aimX - 33, aimY + 40);
  }
  // noFill;
}

//aim fire
function keyTyped() {
  if (arcreloadW > 350) {
    if (key === ' ') {
      //ammohit
      // ammoX = 0 + aimX+ random(-10,10);
      ammoX = 0 + aimX + random(-aimW / 2, aimW / 2);

      //aim reset
      aimW = 120;
      aimH = 120;
      aimmingS = aimmingSd;


      //ammo velocity
      ammoSpeed = 20.2;
      ammoAccel = 0.5;
      ammoSize = 0.5;

      //reload gauge reset
      reloadW = 0;
      reloadA = 271;

      arcreloadW = 1;
      arcreloadS = 0;
      arcreloadV = 0;
      textT = true;

      shot.play();
    }
  }

  //reload
  if (key === 'r') {
    ammoY = 500;
    ammoSpeed = 0;
    ammoAccel = 0;
    ammoV = 255;
    ammoSize = 0;
    ammoW = ammoDeSize;
    ammoH = ammoDeSize;
    reloadS = 2;
    reloadW = 0;
    tankSpeed1 = 1;
    arcreloadS = 2;
    arcreloadV = 125;

    if (hit === true) {
      tankX = width;
    }
    hit = false;
    textT = false;

  }
  if (key === 's') {
    startbutton = false
  }
}
