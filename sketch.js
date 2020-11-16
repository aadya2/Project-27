
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof();
	bob1 = new Bob(260, 620);
	bob2 = new Bob(330, 620);
	bob3 = new Bob(400, 620);
	bob4 = new Bob(470, 620);
	bob5 = new Bob(540, 620);
	rope1 = new Rope(roof.body , bob1.body, -bob1.diameter*2, 0);
	rope2 = new Rope(roof.body , bob2.body, -bob2.diameter*2, 0);
	rope3 = new Rope(roof.body , bob3.body, -bob3.diameter*2, 0);
	rope4 = new Rope(roof.body , bob4.body, -bob4.diameter*2, 0);
	rope5 = new Rope(roof.body , bob5.body, -bob5.diameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobRise();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function bobRise(){
     if(keyCode === UP_ARROW) {
		// bob1.velocityX = -4;
		// bob1.velocityY = -5;
		Matter.Body.setStatic(bob1.body, false);   
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: 0, y: -12});   

	 }
}

