var fishingHookLength;
var fishCaught;
var money;



function preload() {
  idleAnimation = loadAnimation("idle1.png", "idle2.png", "idle3.png", "idle4.png");
  fishingAnimation = loadAnimation("fg1.png", "fg2.png", "fg3.png", "fg4.png", "fg5.png");

  boatImg = loadImage("boat.png");

  waterImg = loadImage("bg.png");

  grassImg = loadImage("grass.jpg");

  fish1Img = loadImage("fish1.png");
  fish2Img = loadImage("fish2.png");
  fish3Img = loadImage("fish3.png");
  fish4Img = loadImage("fish4.png");
  fish5Img = loadImage("fish5.png");
  fish6Img = loadImage("fish6.png");

  sharkImg = loadImage("shark.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  water = createSprite(width / 2, height / 2, width, height);
  water.addImage(waterImg);
  water.scale = 1.5;

  // fishing = createSprite(windowWidth / 2, 500);
  // fishing.addAnimation("abc", fishingAnimation);
  // fishing.scale = 3;

  grass = createSprite(245, 600);
  grass1 = createSprite(1675, 600);
  grass.addImage(grassImg);
  grass1.addImage(grassImg);
  grass.scale = 2;
  grass1.scale = 2;

  idle = createSprite(windowWidth / 2, 500);
  idle.addAnimation("abc", idleAnimation);
  idle.scale = 3;


  boat = createSprite(windowWidth / 2 - 80, 550);
  boat.addImage(boatImg);
  boat.scale = 2;

  fish1 = createSprite(800, 800);
  fish1.addImage(fish1Img);
  fish1.scale = 3;

  fish2 = createSprite(800, 1000);
  fish2.addImage(fish2Img);
  fish2.scale = 3;

  fish3 = createSprite(700, 600);
  fish3.addImage(fish3Img);
  fish3.scale = 3;

  fish4 = createSprite(900, 630);
  fish4.addImage(fish4Img);
  fish4.scale = 3;

  fish5 = createSprite(750, 700);
  fish5.addImage(fish5Img);
  fish5.scale = 3;

  fish6 = createSprite(700, 840);
  fish6.addImage(fish6Img);
  fish6.scale = 3;

  shark = createSprite(840, 910);
  shark.addImage(sharkImg);
  shark.scale = 3;

}



function draw() {
  background(255);
  
  idle.x = boat.x;
  
  if (fish1.x < 801) {
    fish1.velocityX = 2;
  }
  if(fish1.x >= 1000) {
    fish1.velocityX = -2;
  }

  if (fish2.x < 801) {
    fish2.velocityX = 2;
  }
  if(fish2.x >= 1000) {
    fish2.velocityX = -2;
  }

  if (fish3.x < 701) {
    fish3.velocityX = 2;
  }
  if(fish3.x >= 1000) {
    fish3.velocityX = -2;
  }

  if (fish4.x < 901) {
    fish4.velocityX = 2;
  }
  if(fish4.x >= 1000) {
    fish4.velocityX = -2;
  }

  if (fish5.x < 751) {
    fish5.velocityX = 2;
  }
  if(fish5.x >= 1000) {
    fish5.velocityX = -2;
  }

  if (fish6.x < 701) {
    fish6.velocityX = 2;
  }
  if(fish6.x >= 1000) {
    fish6.velocityX = -2;
  }

  if (shark.x < 841) {
    shark.velocityX = 2;
  }
  if(shark.x >= 1000) {
    shark.velocityX = -2;
  }


  drawSprites();
}