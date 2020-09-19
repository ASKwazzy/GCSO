var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background(0,0,0);

  car.velocityX = speed;

  deformation();

  drawSprites();
}

function deformation(){

if(wall.x-car.x < car.width/2 + wall.width/2){
  var deform = 0.5 *weight * speed * speed/22500;
  car.velocityX = 0;
  if(deform<100){
    car.shapeColor = color(0,255,0);
  }else if(deform>100 && deform<180){
    car.shapeColor = color(230,230,0);
  }else if(deform>180){
    car.shapeColor = color(255,0,0);
  }
}
}