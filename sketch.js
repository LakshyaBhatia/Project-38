
var monkey , monkey_running;
var score;
var ground;


function preload(){
  
  
  monkey_running = loadAnimation("sprite_4.png")
}



function setup() {
  createCanvas(displayWidth - 20, displayHeight-100);
  
  monkey = createSprite(100,250,20,20);
  monkey.addAnimation("monnkey",monkey_running)
  monkey.scale=0.2;
 
  ground = createSprite(300,280,3000,10); 
        

  
  score = 0;
}


function draw() {
  background("green")
  
if(keyDown("space") && monkey.y>130){
  monkey.velocityY=-12
}
  camera.position.x = displayWidth/2;
  camera.position.y = monkey.y;
  camera.position.x = monkey.x;
 

if(keyDown("UP")){
  monkey.velocityY=-5
}
if(keyDown("DOWN")){
  monkey.velocityY=5
}
if(keyDown("LEFT")){
  monkey.velocityX=-5
}
if(keyDown("RIGHT")){
  monkey.velocityX=5
}

if (monkey.velocityY > 0) {
  monkey.velocityY = monkey.velocityY - 1;
}
if (monkey.velocityY < 0) {
  monkey.velocityY = monkey.velocityY + 1;
}
if (monkey.velocityX > 0) {
  monkey.velocityX = monkey.velocityX - 1;
}

if (monkey.velocityX < 0) {
  monkey.velocityX = monkey.velocityX + 1;
}
  
if(ground.x<0) {
  
  ground.x=ground.width/2
  
}
 monkey.collide(ground);
  
 

 drawSprites();
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Exploring Time: "+survivalTime,100,50)
  
}
