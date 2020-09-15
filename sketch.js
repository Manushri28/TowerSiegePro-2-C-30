const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var box16;

var box17, box18, box19, box20, box21;
var box22, box23, box24;
var box25;

var platform1, platform2, ground;
var slingShot;
var circle;

function setup(){
    var canvas = createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1400,20);
    platform1 = new Ground(750, 420, 280, 10);
    platform2 = new Ground(1100, 200, 250, 10);

    box1 = new BlueBox(660,400,30,40);
    box2 = new BlueBox(690,400,30,40);
    box3 = new BlueBox(720,400,30,40);
    box4 = new BlueBox(750,400,30,40);
    box5 = new BlueBox(780,400,30,40);
    box6 = new BlueBox(810,400,30,40);
    box7 = new BlueBox(840,400,30,40);

    box8 = new TurquosieBox(690,360,30,40);
    box9 = new TurquosieBox(720,360,30,40);
    box10 = new TurquosieBox(750,360,30,40);
    box11 = new TurquosieBox(780,360,30,40);
    box12 = new TurquosieBox(810,360,30,40);

    box13 = new PinkBox(720,320,30,40);
    box14 = new PinkBox(750,320,30,40);
    box15 = new PinkBox(780,320,30,40);

    box16 = new GreyBox(750,280,30,40);



    box17 = new BlueBox(1040,180,30,40);
    box18 = new BlueBox(1070,180,30,40);
    box19 = new BlueBox(1100,180,30,40);
    box20 = new BlueBox(1130,180,30,40);
    box21 = new BlueBox(1160,180,30,40);

    box22 = new TurquosieBox(1070,140,30,40);
    box23 = new TurquosieBox(1100,140,30,40);
    box24 = new TurquosieBox(1130,140,30,40);

    box25 = new PinkBox(1100,120,30,40);

    
    circle = new Circle(300, 200, 20, 20);
    chain = new Slingshot(circle.body,{x:200, y:250});
}

function draw(){
    background(0);
    strokeWeight(1);
    stroke("black");
    Engine.update(engine);
    
    fill("white");
    textSize(17);
    text('Drag and release the circle to dismantle the block pyramid..', 140, 100)
    text('Press SPACE to get more opportunities to play', 670, 100)

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    
    box16.display();


    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    box22.display();
    box23.display();
    box24.display();
    
    box25.display();


    ground.display();
    platform1.display();
    platform2.display();
    circle.display();
    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(circle.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    chain.Fly()
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(circle.body);
    }
}
