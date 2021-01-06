
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var paper2;
var ground1;
var binImage;
var bin1;
var paperImage;

function preload(){
	binImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paper1 = new paper(200,200,50,50)
World.add(world, paper1);

ground1 = new Ground(800,670,1600,20);  

boxPosition=width/1.2-0.5
boxY=610;

bin1=createSprite(boxPosition+100, boxY+10,50,50);
bin1.addImage(binImage);
bin1.scale=0.7;

	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);
    boxleftSprite.visible=false;
	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);
    boxBase.visible=false;
	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);
    boxleftSprite.visible=false;
	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	boxRightBody.visible=false;
	World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
paper1.display();
ground1.display();

keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-5});
		paper1.isStatic=false;
	}
}
