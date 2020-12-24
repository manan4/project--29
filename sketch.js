const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,ground2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,
    box11,box12,box13,box14,box15;
var polygon;
var launcher;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(600,580,1200,20)
 ground2 = new Ground(390,300,260,10);
 ground3 = new Ground(900,400,200,10);

 polygon = new Polygon(150,200,30);
 launcher = new SlingShot(polygon.body,{x:150,y:110})

 box1 = new Box(700,320,40,40);
 box1.shapeColor = (255,175,244);
 box2 = new Box(920,320,70,70);
 box3 = new Box(700,240,70,70);
 box4 = new Box(920,240,70,70);
 box5 = new Box(810,160,70,70);
 box6 = new Box(700,320,70,70);
 box7 = new Box(920,320,70,70);
 box8 = new Box(700,240,70,70);
 box9 = new Box(920,240,70,70);
 box10 = new Box(810,160,70,70);
 box11 = new Box(700,320,70,70);
 box12 = new Box(920,320,70,70);
 box13 = new Box(700,240,70,70);
 box14 = new Box(920,240,70,70);
 box15 = new Box(810,160,70,70);


}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine);
  
  box1.display();
  ground.display();
  ground2.display();
  ground3.display();
polygon.display();
launcher.display();


 drawSprites();
 //ground.display();
 
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 
