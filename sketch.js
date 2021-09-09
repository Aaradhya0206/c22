const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine, myWorld,object;
var ball

function setup(){
  var canvas=createCanvas(400,400);

  myEngine=Engine.create();
  // myWorld is myEngines's World
  myWorld=myEngine.world;

  var options={
    isStatic : true
  }

  var ballOptions={
     restitution: 1.5
  }
  object=Bodies.rectangle(200,300,200,20,options);
  World.add(myWorld,object);
  console.log(object);
  ball=Bodies.circle(200,50,25,ballOptions)
World.add(myWorld,ball);

}
function draw()
{
  background(0);
    Engine.update(myEngine);
    rectMode(CENTER);
   rect(object.position.x,object.position.y,200,20);
  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);



}