var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  thickness = random(22,80);
  wall = createSprite(1500,200,thickness,200);
  speed = random(55,90);
  weight = random(400,1500);
  bullet.velocityX = speed;
  
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness); }
    
    if(damage > 10)
      wall.shapeColor = "white";
    else
      wall.shapeColor = color(0,255,0);
  drawSprites();
}
function hasCollided(lbullet, lwall) { 
  bulletRightEdge=lbullet.x +lbullet.width; 
  wallLeftEdge=lwall.x; 
  if (bulletRightEdge>=wallLeftEdge)
      { return true } 
   return false; }
