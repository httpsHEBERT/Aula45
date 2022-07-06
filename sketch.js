var bg;
var nave, naveImg, naveVelCima, naveVelBaixo;

function preload(){

  bg = loadImage("Images/bg.png");
  naveImg = loadImage("Images/b_thrust_1.png");
  naveVelCima = loadAnimation("Images/b_thrust_1.png", "Images/b_thrust_2.png", "Images/b_thrust_3.png");
  naveVelBaixo = loadAnimation("Images/b_thrust_3.png", "Images/b_thrust_2.png", "Images/b_thrust_1.png");
  naveVelCima.looping = false;
  naveVelBaixo.looping = false;
}

function setup(){

    createCanvas(windowWidth, windowHeight-4);

    nave = createSprite(width-100, 80);
    nave.addAnimation("Cima", naveVelCima);
    nave.addAnimation("Baixo", naveVelBaixo);
    nave.addImage(naveImg);
    nave.scale = 0.2;
}

function draw(){

    background(bg);
    drawSprites();

    naveEspacial();
}

function naveEspacial(){

    let velY = nave.velocityY.toFixed(1);

    nave.velocityY += 0.5;

    if(keyDown("w")){
        nave.velocityY -= 1.3;
    }

    naveVelCima.frameDelay = 30;
    naveVelBaixo.frameDelay = 30;

    if(keyWentDown("w")){
        nave.changeAnimation("Cima");
    }

    if(keyWentUp("w")){
        nave.changeAnimation("Baixo");
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}