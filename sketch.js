const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,floor,floor2,glass;

function preload(){
bgImage=loadImage("s.jpg");
}
function setup() {
  createCanvas(1300,650);
  engine=Engine.create();
  world = engine.world;

 floor=new Ground(550,490,330,20);
 floor2=new Ground(1050,300,280,20);
 floor3=new Ground(650,650,1300,20);
glass=new Slave(460,455,50,50);
glass2=new Slave(490,455,50,50);
glass3=new Slave(520,455,50,50);
glass4=new Slave(550,455,50,50);
glass5=new Slave(580,455,50,50);
glass6=new Slave(610,455,50,50);
glass7=new Slave(640,455,50,50);
glass8=new Slave(490,410,50,50);
glass9=new Slave(520,410,50,50);
glass10=new Slave(550,410,50,50);
glass11=new Slave(580,410,50,50);
glass12=new Slave(610,410,50,50);
glass13=new Slave(520,365,50,50);
glass14=new Slave(550,365,50,50);
glass15=new Slave(580,365,50,50);
glass16=new Slave(550,318,50,50);
glass17=new Slave(1100,265,50,50);
glass18=new Slave(1070,265,50,50);
glass19=new Slave(1040,265,50,50);
glass20=new Slave(1010,265,50,50);
glass21=new Slave(980,265,50,50);
glass22=new Slave(1070,220,50,50);
glass23=new Slave(1040,220,50,50);
glass24=new Slave(1010,220,50,50);
glass25=new Slave(1040,175,50,50);
ball=new shooter(100,100,20,20);
sling=new SlingShot(ball.body,{x:200,y:200});



}

function draw() {
  background(bgImage);  
  Engine.update(engine);
  floor.display();
  floor2.display();
  glass.display();
  glass2.display();
  glass3.display();
  glass4.display();
  glass5.display();
  glass6.display();
  glass7.display();
  glass8.display();
  glass9.display();
  glass10.display();
  glass11.display();
  glass12.display();
  glass13.display();
  glass14.display();
  glass15.display();
  glass16.display();
  glass17.display();
  glass18.display();
  glass19.display();
  glass20.display();
  glass21.display();
  glass22.display();
  glass23.display();
  glass24.display();
  glass25.display();
  ball.display();
  sling.display();
  floor3.display();
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
sling.fly();
}	

function keyPressed(){
 if(keyCode === 32){
   sling.attach(ball.body);
 }
}