const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var testBall;
var time;
var creationTime;
var meteors;
var displayCounter;
var MeteorLimit;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.y = 0;
  creationTime = 20;
  time = 0;
  displayCounter = 0;
  meteors=[];
  MeteorLimit = 100;
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  time++;
  if(time%creationTime==0) {
    meteors.push(new Meteor(Math.random()*400-1/800,Math.random()*400-1/800,Math.random()*60-1/120,Math.random()/30-1/60,Math.random()/30-1/60));
  }
  while(displayCounter<meteors.length) {
    meteors[displayCounter].display();
    displayCounter++;
  }
  displayCounter = 0;
  if(meteors.length>=MeteorLimit) {
    meteors.shift();
  }
}