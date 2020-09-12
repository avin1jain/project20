const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var object;
var ground;
function setup() {
  createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic: false
	}
	object = Bodies.rectangle(200, 100, 50, 50, options);
	World.add(world, object);
console.log(object.position.x);
console.log(object.position.y);
var option1={isStatic:true }
ground=Bodies.rectangle(200,390,400,20)
 World.add(world,ground)
}

function draw() {
  background(0);
Engine.update(engine);

rectMode(CENTER); 
  rect(object.position.x, object.position.y, 50, 50);
  rect(ground.position.x, ground.position.y, 400, 20);

}
