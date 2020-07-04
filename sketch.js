const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var paint;
this.visibilty = paint.visibilty;
//var database;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world; 
    paint = new Paint(10,10);
    //database = firebase.database();
    
}

function draw(){
    var button = createButton('Refresh');
    button.position(20,20);   
 
Engine.update(engine);
   
 paint.display(); 

  
}

button.mousePressed(function(){
    paint.hide();
});


