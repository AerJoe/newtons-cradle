const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 600);
	

	engine = Engine.create();
	world = engine.world;
	
	var bob_options={
	restitution:0.1
	}	
	//testing the movement of the constraint for one specific bob
	var test_options = {
		isStatic:false
	}


	bob=Bodies.circle(300,300,50,bob_options)
	World.add(world,bob);

	bob2=Bodies.circle(350,300,500,bob_options)
	World.add(world,bob2);

	bob3=Bodies.circle(400,300,500,bob_options)
	World.add(world,bob3);

	bob4=Bodies.circle(450,300,500,bob_options)
	World.add(world,bob4);

	bob5=Bodies.circle(500,300,500,bob_options)
	World.add(world,bob5);

	var roof_options={
		isStatic:true
	}

	

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var rope1_options = {
		bodyA:roof,
		bodyB:bob,
		length:200,
		stiffness:0.2
	}
	var rope2_options = {
		bodyA:roof,
		bodyB: bob2,
		length:200,
		stiffness:0.2
	}
	var rope3_options = {
		bodyA:roof,
		bodyB: bob3,
		length:200,
		stiffness:0.2
	}
		var rope4_options = {
		bodyA:roof,
		bodyB: bob4,
		length:200,
		stiffness:0.2
	}
	var rope5_options = {
		bodyA:roof,
		bodyB: bob5,
		length:200,
		stiffness:0.2
	}


	rope1 = Constraint.create(rope1_options);
	World.add(world, rope1);

	rope2 = Constraint.create(rope2_options);
	World.add(world, rope2);

	rope3 = Constraint.create(rope3_options);
	World.add(world, rope3);
	
	rope4 = Constraint.create(rope4_options);
	World.add(world, rope4);

	rope5 = Constraint.create(rope5_options);
	World.add(world, rope5);

	Engine.run(engine);
	
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
ellipse(bob.position.x,bob.position.y,50);
ellipse(bob2.position.x,bob2.position.y,50); 
ellipse(bob3.position.x,bob3.position.y,50);
ellipse(bob4.position.x,bob4.position.y,50);
ellipse(bob5.position.x,bob5.position.y,50);
}




//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
