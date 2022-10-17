const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, engine, world;
var groundObj;

function setup() {
	createCanvas(1600, 700);
	// case sensitive
	// sensivel a maiusculas e minusculas

	engine = Engine.create();
	world = engine.world;

	var balloptions ={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(30,20,10,balloptions);
	World.add(world,ball);

	groundObj = new Ground(width/2, 670, width,20);
	leftSide = new Ground(800, 600,20, 120);
	rightSide = new Ground(900, 600,20, 120);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 20);

  groundObj.display();
  leftSide.display();
  rightSide.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x: 19, y: -19});
	}
}
