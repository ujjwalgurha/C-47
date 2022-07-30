 var backgroundImage;
 var ufo1Image,ufo2Image;
 var spaceshipImage;           
 var ufoSprite,ufo2Sprite;
 var spaceshipSprite;
 var backgroundSprite;
 var asteriodsimage;
var enemySprite;
var missle,missleImage;
var missle;
var EnemyGroup;

function preload(){
 
  backgroundImage = loadImage("space.jpg");
  ufo1Image = loadImage("ufo1.png");
  ufo2Image = loadImage("ufo2.png");
  spaceshipImage = loadImage("SPACESHIP.png");
  asteriodsimage = loadImage("asteriods.png");
  missleImage = loadImage("missle.png");


    
}

function setup() {
   
createCanvas(1200,800);

backgroundSprite = createSprite(200,200);
backgroundSprite.addImage(backgroundImage);
 
spaceshipSprite = createSprite(100,350); 
spaceshipSprite.addImage(spaceshipImage);
  
 missleGroup =createGroup();
 EnemyGroup=createGroup();
}

function draw() {
 background("black");
enemy();

if(keyDown("UP_ARROW")){
spaceshipSprite.y-=7;
 
}

if(keyDown("DOWN_ARROW")){
  spaceshipSprite.y+=7;
  
}

if(keyDown("space")){
   spawnMissle();
}
 

if(missleGroup.isTouching(EnemyGroup)){
EnemyGroup.destroyEach();
missleGroup.destroyEach();
}
if(spaceshipSprite.isTouching(EnemyGroup))
{
  spaceshipSprite.destroy();
  EnemyGroup.destroyEach();
  missleGroup.setLifetimeEach(-1);

}

drawSprites();
}


function enemy(){


if(frameCount%100===0){
  
  
enemySprite=createSprite(1200,Math.round(random(50,700)),50,50)
enemySprite.velocityX=-5;



var rand=Math.round(random(1,3))
switch(rand){
  case 1 : enemySprite.addImage(ufo1Image); 
           enemySprite.scale= 0.5;
           break;
           
  case 2: enemySprite.addImage(ufo2Image);
          enemySprite.scale= 0.5;
          break;   
          
  case 3: enemySprite.addImage(asteriodsimage);
          enemySprite.scale= 0.3;
          break;
          
  default: break;       
}

EnemyGroup.add(enemySprite)
}

for(i=0;i<EnemyGroup.length;i=i+1){
      
  if(missleGroup.isTouching(EnemyGroup.get(i))){
    //score=score+1;
    EnemyGroup.get(i).destroy();
    missleGroup.destroyEach();

  }
}



}

function spawnMissle(){
  if(frameCount % 30 ===0){
missle=createSprite(90,100);
missle.addImage(missleImage)
missle.scale =0.3;
missle.y= spaceshipSprite.y;
missle.velocityX =5;
missleGroup.add(missle);
missle.lifetime=1000 
spaceshipSprite.depth =missle.depth;
spaceshipSprite.depth+=1;

  }
}





