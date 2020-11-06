const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;




   
    box = new Box(150, 305, 300, 170);

    box1 = new Box(250,250,30,100);

	ballthing = new Ballthing(100,100);
	
	sling = new Sling(ballthing.body , {x:200,y:100})

    

}

function draw(){
    background(0);

    box2.display();
    ground.display();
    pig1.display();
    log1.display();



}

