
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivaltime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
  
ground = createSprite(400,350,900,10);
  
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
background("white");
  monkey.scale = 0.1
  monkey.collide(ground);
  if(keyDown("space")){
  monkey.velocityY = -12;
}
  monkey.velocityY = monkey.velocityY +0.8
    ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(mouseY);

  obstacles();
  food();
  drawSprites();
}

function food(){
  if (frameCount % 80 === 0){
   banana = createSprite(400,0,10,10);
  banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -5;
    banana.lifetime = 90;
    bananaGroup.add(banana);
  }
}
function obstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(400,324,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale =0.1
    obstacle.velocityX = -5
    obstacle.lifetime = 90;
    obstacleGroup.add(obstacle);
  }
}  