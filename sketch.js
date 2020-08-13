
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob (200,450,20);
bob2 = new Bob (240,450,20);
bob3 = new Bob (280,450,20);
bob4 = new Bob (320,450,20);
bob5 = new Bob (360,450,20);

roof1 = new  Roof (280,280,200,30);

rope1 = new Rope (bob1.body,{x:200,y:300});
rope2 = new Rope (bob2.body,{x:240,y:300});
rope3 = new Rope (bob3.body,{x:280,y:300});
rope4 = new Rope (bob4.body,{x:320,y:300});
rope5 = new Rope (bob5.body,{x:360,y:300});
//rope1 = new Rope (bob1.body,roof1.body,250,2);
	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  
  

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

 //rope1.display();
 roof1.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100});
	}
}



