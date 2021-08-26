var dungeonImg, dungeon1;

function preload(){
  dungeonImg = loadImage("dungeon1.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  dungeon1 = createSprite(width/2, height/2);
  dungeon1.addImage(dungeonImg);
  dungeon1.scale = 2.46;
}

function draw() {
  background(220);
  drawSprites();
}