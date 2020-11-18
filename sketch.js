const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var outline1,outline2,outline3,outline4;
var ground;
var division;
var plinko;

function setup() {
  createCanvas(450,650);
  outline1=createSprite(0,0,900,10);
  outline2=createSprite(0,650,900,10);
  outline3=createSprite(0,500,10,1000);
  outline4=createSprite(450,500,10,1000);

  ground = new Ground(225,640,440,9);

  division = new Divisions(80,535,10,200);

  plinko = new Plinko(100,200);
}

function draw() {
  background(0);  
    

  outline1.display();
  outline2.display();
  outline3.display();
  outline4.display();
  ground.display();
  division.display();
  plinko.display();
}