var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImage;
var score = 0;
var livesImage1;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImage = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")
  livesImage1 = loadImage("assets/heart_3.png")

}

function setup() {

  
  createCanvas(displayWidth,displayHeight);



  //adding the background image
  //bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
//bg.addImage(bgImg)
//bg.scale = 1.3
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
   
   lives = createSprite(70, 40, 10, 10)
   lives.addImage(livesImage1)
   lives.scale = 0.2


}

function draw() {
  background(bgImg); 

textSize(40)
stroke ("White")
fill ("White")
text("Score :  "+score, 800, 50)


  //moving the player up and down and making the game mobile compatible using touches
if((keyDown("UP_ARROW")||touches.length>0)&&player.y>300){
  player.y = player.y-30
}
if((keyDown("DOWN_ARROW")||touches.length>0)&&player.y<displayHeight-100){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

sponZombie();

drawSprites();

}

function sponZombie(){
  if(frameCount%300===0){
    var zombie = createSprite(width, height/2)
    zombie.y = Math.round(random(width/3, height-100))
    zombie.scale = 0.2
    zombie.velocityX = -7;
    zombie.addImage(zombieImage)
  }
  

}