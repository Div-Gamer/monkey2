
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,spawnObstacles




function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas (500,400)
  
  
  monkey = createSprite(40,350,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground = createSprite(400,390,800,20);
  ground.x = ground.width /2;
 ground.velocityX = -4;
  
  obstacleGroup= new Group
   FoodGroup= new Group
  
  
  
  score = 0
}



function draw() {
background("lightblue")

  
  stroke("black")
  textSize(20)
  fill("black")
  text("Survival Time: "+ score, 200,50);
  
  
  score = score + Math.round(frameCount/60);
    if (ground.x < 30){
      ground.x = ground.width/2;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  
 if(keyDown("space")&& monkey.y >=150) {
        monkey.velocityY = -13;
    }
  
  spawnfood()
  spawnObstacles()

  if(obstacleGroup.isTouching(monkey)){
    FoodGroup.setVelocityXEach(0)
    obstacleGroup.setVelocityXEach(0)
    score=0
    monkey.velocityY=0
    ground.velocityX=0
  } 
    
    
    
   
  drawSprites() 
}


function spawnObstacles(){
 if (frameCount % 200 === 0){
   var obstacle = createSprite(550,365,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage(obstaceImage)
   obstacle.scale=0.1
   obstacleGroup.add(obstacle)
   
    }

  
  
}

function spawnfood(){
 if (frameCount % 60 === 0){
   var food = createSprite(550,365,10,40);
   food.y = Math.round(random(50,300));
   food.velocityX = -6;
   
   food.addImage(bananaImage)
   food.scale=0.1
     FoodGroup.add(food)
   
    }


}