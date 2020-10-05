
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     Tree=new tree();
	 Ground = new ground();
	 Stone = new stone();
	 boy = new Boy();
   chain1 = new chain(Stone.body,{x:140,y:555})
   mango1 = new Mango(400,400,10,10);
   mango2 = new Mango(500,300,10,10);
   mango3 = new Mango(470,370,10,10);
   mango4 = new Mango(610,310,10,10);
   mango5 = new Mango(700,380,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  Stone.display();
  Ground.display();
  Tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();
  chain1.display();

  ne(Stone,mango1);
  ne(Stone,mango2);
  ne(Stone,mango3);
  ne(Stone,mango4);
  ne(Stone,mango5);
}

function mouseDragged(){
    Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Stone.fly()
}

function ne(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  StoneBodyPositon=lstone.body.position

  var distance=dist(StoneBodyPositon.x,StoneBodyPositon.y,mangoBodyPosition.x,mangoBodyPosition.y)
      if(distance<=lmango.r+lstone.r){
        Matter.Body.setStatic(lmango.body,false)
      }
}


