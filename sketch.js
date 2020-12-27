var car ,carImg1, carImg2, carImg3, wall, wallImg, start, startImg;
var deformation, deformationReview;
var gameStates;
var ONE, TWO;
var randSpeed, randWeight;
var pow, powImg;

function preload() {
  // carImg = createImg("car.gif", "Car Gif", "", () =>{
  //   carImg.size(0,0);
  // });
  carImg1 = loadImage("car1.png");
  carImg2 = loadImage("car2.png");
  powImg = loadImage("pow.png");
  startImg = loadImage("start.png");
}
function setup() {
  createCanvas(800,800);
  background("grey");
  car = createSprite(200, 400, 50, 50);
  car.scale=0.5;
  car.debug = true;
  car.setCollider("rectangle", 0, 0, 400, 150);
  wall = createSprite(750, 400, 20,800);
  wall.shapeColor="white";
  start = createSprite(80,40,20,20);
  start.addImage("startImg", startImg);
  start.scale=0.4;
  randSpeed = Math.round(random(10,100));
  randWeight = Math.round(random(1000,3000));
  gameState=ONE;
  deformationReview = "Deformation On Review....";
  pow = createSprite(400, 400);
  pow.addImage("powimg", powImg);
  pow.scale = 0.8;
  pow.visible = false;
}

function draw() {
  background("Black");
  conditions();
  drawSprites();
  //image(carImg, car.x, car.y, 20,20);
  //carImg.size(200, AUTO);
  //carImg.position(car.x, car.y);
  switchCars();
  if(gameState===ONE) {
     deformation =  "Testing on Progress";
     if(gameState===ONE && mousePressedOver(start)) {
       reset();
     }
   }
   if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2) {
     deformation = (0.5*randWeight*randSpeed*randSpeed/22500);
     pow.visible = true;
     pow.lifetime= 10;
}
  fill("white");
  textFont("Fantasy");
  textSize(20);
  textStyle(NORMAL);
  text("DEFORMATION : " + deformation, 20,100);  
  text("DEFORMATION REVIEW : " + deformationReview, 20, 120);
}
function conditions() {
  if(mousePressedOver(start)) {
      gameState=TWO;
      car.velocityX = randSpeed/10;
      //car.x= ((wall.width/2 + car.width/2) - ((wall.x)))*(-1);
      //delay(4000);
   }
   else{
     gameState=ONE;
   }
   if(gameState===TWO) {
      //car.x = mouseX;
      //car.y = mouseY;
     if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2) {
       car.velocityX=0;
       if(deformation<80) {
        deformationReview = " TEST IS EXELLENT"
       }
       if(deformation>80 && deformation<180) {
        deformationReview = " TEST RUNS GOOD"
       }
       if(deformation>180) {
        deformationReview = " TEST IS BAD"
       }
  }
   }
}
function algorithm() {
  //algorithm
  car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2 &&
  car.y - wall.y < car.height/2 + wall.height/2 && wall.y - car.y < car.height/2 + wall.height/2;
}
function reset() {
  deformation =  "Testing on Progress";
  deformationReview = "Deformation On Review....";
  car.x = 200;
  car.y = 400;
}
function switchCars() {
  var randCar = Math.round(random(1,2));
  switch(randCar){
    case 1: car.addImage("carImg1", carImg1);
    break;
    case 2: car.addImage("carImg2", carImg2);
    break;
    default : break;
  }
}