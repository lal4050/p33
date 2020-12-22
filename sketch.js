const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score=0;
var particle,turn;
var gameState = "play";
var count=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divide(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(50);  text("Score : "+score,20,30);
  textSize(20);  text("500",20,550);
  textSize(20);  text("500",180,550);
  textSize(20);  text("500",100,550);
  textSize(20);  text("500",260,550);
  textSize(20);  text("100",340,550);
  textSize(20);  text("100",420,550);
  textSize(20);  text("100",500,550);
  textSize(20);  text("200",580,550);
  textSize(20);  text("200",660,550);
  textSize(20);  text("200",740,550);

  mousePressed();



  Engine.update(engine);
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   if(frameCount%60===0){
     particles.push(new Ball(random(width/2-30, width/2+30), 10,10));
   }
  
   for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }

   if (particle!=null){



   }

}


function mousePressed(){

if (gameState!=="end"){
  count++
  particle = new Plinko(mouseX,10,10,10);
  console.log(score);
}

}
