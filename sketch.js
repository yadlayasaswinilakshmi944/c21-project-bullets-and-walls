
var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

thickness=random(22, 83);
speed=random(22, 55);
weight=random(30, 52);

 bullet=createSprite(50, 200, 50, 10);
bullet.velocityX = speed;
bullet.shapeColor="white";

wall=createSprite(1000, 200, 20, height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background(0);  

  

    if(hasCollided(bullet, wall)){

      bullet.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness* thickness* thickness);
      
      
      if(damage>10){
        wall.shapeColor="green";
      }
  
      if(damage<10){
        wall.shapeColor="red";
      }
    }
  drawSprites();
}

function hasCollided(Lbullet, Lwall){

bulletRightEdge=Lbullet.x + Lbullet.width;
wallLeftEdge = Lwall.x;

if(bulletRightEdge>=wallLeftEdge){

  return true;
}
else {
return false;
}
}
