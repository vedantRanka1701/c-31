const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  ground = new Ground(600,height,1200,20);
  createSprite(400, 200, 50, 50);

}

function draw() {
  background(0,0,0);  
  ground.display()
  drawSprites();
}