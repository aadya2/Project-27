const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//Maybe the below sentence should not be there
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 50, 500, 50);

	bob1 = new Bob(400, 300);
	//Check for -bobDiameter
	rope1 = new Rope(bob1.body, roof.body, 0, 0);

	bob2 = new Bob(320, 300);
	rope2 = new Rope(bob2.body, roof.body, -80, 0);

	bob3 = new Bob(240, 300);
	rope3 = new Rope(bob3.body, roof.body, -160, 0);

	bob4 = new Bob(480, 300);
	rope4 = new Rope(bob4.body, roof.body, 80, 0);

	bob5 = new Bob(560, 300);
	rope5 = new Rope(bob5.body, roof.body, 160, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(bob3.body, bob3.body.position,{x:-10, y:0});
	}
}

