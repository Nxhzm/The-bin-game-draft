
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var world;
var ground1;
var binWall1Sprite, binWall2Sprite, binWall3Sprite;
var binWall1Body, binWall2Body, binWall3Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


  paper1 = new paper (40, 680, 55);
	ground1 = new ground (400,695,800,10);
	

  binWall1Sprite = createSprite (458, 680, 15, 145);
  binWall2Sprite = createSprite (540,690, 180, 15);
  binWall3Sprite = createSprite (630, 680, 15, 150);
 
    binWall1Body = Bodies.rectangle(458, 680, 15, 145, {isStatic:true});
    World.add(world, ground);

    binWall2Body = Bodies.rectangle( 540, 690, 180, 15, {isStatic:true} );
    World.add(world, ground);

    binWall3Body = Bodies.rectangle(630, 680, 15, 150, {isStatic:true} );
    World.add(world, ground);


	//Engine.run(engine);
  
}


function draw() {
  // rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
  
   drawSprites();
  //box1.display();
  paper1.display();
  ground1.display();

  Matter.Bodies.circle(this.x, this.y, 2 * this.r, [options], [maxSides]);

  keyPressed();

function keyPressed() {
  if (keycode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200,y:-100});
  }
}
}
