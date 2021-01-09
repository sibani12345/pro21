var car,thickness,wall;
var bullet,weight,speed;




function setup() {
  createCanvas(1600,400);

  speed = random(30,100);
  weight = random(700,2500);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "grey";

  speed=random(223,321);
  weight=random(32,52);

  thickness=random(22,82);

  car.velocityX = speed;
}


function draw() {
  background("black");
  
  var deformation = 0.5 *width*speed*speed/22509;  

if(wall.x - car.x < (car.width+wall.width)/2 && wall.x - car.x < (car.width+wall.width)/2 ){
  car.velocityX=0;

if(deformation<180)
{
 car.shapeColor = "yellow";
}
if(deformation<180 && deformation>100);
{ 
car.shapeColor = "red";
}
if (deformation<100)
{ 
  car.shapeColor = "blue";
}
}
  drawSprites();
}

function hasCollided(lbullets,lwalls) {

  bulletRightEdge=lbullets.x+lbullets.width;
  wallleftEdge=lwalls.x;
  if(bulletRightEdge>=wallleftEdge);
  {
    return true;
  }
 
  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);
    
    
    if(damage>10);
{
  wall.shapeColor=colour(255,0,0);
}


if(damage<10)
{
  wall.shapeColor=colour(0,255,0);
}
  }
}