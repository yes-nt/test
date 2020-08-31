var bananaImage
var obstacleImage
var obstacleGroup
var score = 0;
var foodGroup
var monkey
var img
var jungleimg
var jungle
var ground

function preload() {
jungle = loadImage ("jungle.jpg");
img = loadAnimation ("Monkey_01","Monkey_02","Monkey_03","Monkey_04","Monkey_05","Monkey_06","Monkey_07","Monkey_08","Monkey_09","Monkey_10");  

obstacleImage = loadImage ("stone.png");

jungleimg = loadImage ("jungle.img");  
}
function setup() {
  createCanvas(400, 400);
  monkey = createSprite(100,321,1,1);
monkey.addAnimation(img);
monkey.scale = 0.1;
  
ground = createSprite(200,355,800,5);
ground.visible = false;  
  
jungle = createSprite(200,200,1,1); 
jungle.addImage(jungleimg);
  
foodGroup = new Group();  
obstacleGroup = new Group();
}

function draw() {
  background(220);
  
  if(keyDown("space") && monkey.y >=321){
      monkey.velocityY = -15 ;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  stroke("white");
  textSize(20);
  fill ("white");
  text ("Score: "+score,390,50);
  
    ground.velocityX = -(6 + 3*score/100);
  
  if(obstacleGroup.isTouching(monkey)) {
 monkey.scale = 0.1
}
 if(foodGroup.isTouching(monkey)){
   score = score+ 2;
 }
  switch(score){
    case 10: monkey.scale = 0.12;
      break;
    case 20: monkey.scale = 0.14;
    break;
    case 30: monkey.scale = 0.16;
    break;
    case 40: monkey.scale = 0.18;
    break;
    default: break;
}  
}
function spawnfood() {
  if (frameCount % 80 === 0) {
   var banana = createSprite(400,100,2,1);
banana.addImage(BananaImage);
banana.scale = 0.1; 
  var rand = random(120,200);
  banana.y = rand;
  banana.velocityX = -5;
  banana.lifetime = 110;
  foodGroup.add(banana);
  }
}
function spawnrock() {
if(frameCount % 300 === 0) {
var obstacle = createSprite (400,325,1,1);
obstacle.addImage(obstacleImage);
obstacle.scale = 0.15;
obstacle.velocityX = -5;
obstacle.lifetime = 110;
rockGroup.add(obstacle);
}
}



  
