const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 620);



	engine = Engine.create();
	world = engine.world;


 ground = new Ground(600,550,1200,10);
 paper1 = new Paper(50,500,50)
 dustbin1 = new Dustbin(1000,300);





	Engine.run(engine);
  


}

function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  ground.display();
  dustbin1.display();
 // dustbin2.display();
 // dustbin3.display();
  paper1.display();
 
 // drawSprites();
 
}
function keyPressed(){

  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position , {x:10,y:-20});
  
 }
}


