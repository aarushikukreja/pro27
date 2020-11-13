
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var rope1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof= new Roof(400, 250, 300, 30)
 bobObject1= new Bob(400, 450, 30)
 rope1= new Rope(bobObject1.body, roof.body)

	Engine.run(engine);
  
}


function draw() {
	
  background(0);
  roof.display();
  bobObject1.display();
  drawSprites();
 
}



