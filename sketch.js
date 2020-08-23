var a,logoimg ,button,b,bimg 
var score = 0;
var START = 0;
var PLAY = 1; 
var QUIZ =  2;
var gameState = START;
var yes,no,maybe,start1;
var button1;
var q,q1;
var count=0;

 function preload () {
   logoimg=loadImage("logo.png") 
   bimg = loadImage("i.jpg") 
   qimg1 = loadImage("q1 (1).png")
   qimg2 = loadImage("q2 (1).png") 
   qimg3 = loadImage("q3 (1).png") 
   qimg4 = loadImage("q4 (1).png")
   qimg5 = loadImage("q5 (1).jpg") 
   h=loadImage("home.jpg")
   yes=loadImage("yes.jpg");
   no=loadImage("no.jpg");
   maybe=loadImage("maybe.jpg");
   start1=loadImage("start.jpg");
 }
function setup() {
  createCanvas(1000,1000); 

  a=createSprite(200, 300, 50, 50); 
  a.addImage("a1",logoimg)  
  a.scale = 0.35; 


  b=createSprite(200, 120, 50, 50); 
  b.addImage("b1",bimg)  
  b.scale = 0.35;

  button = createButton("Get Started :)"); 
  button.position (150,390); 
  

  button1=createSprite(100,250);
  button1.visible=false;


  yes1=createSprite(50,120);
  yes1.visible=false;

  no1=createSprite(350,120);
  no1.visible=false;

  maybe1=createSprite(550,120);
  maybe1.visible=false;

  yes2=createSprite(50,320);
  yes2.visible=false;

  no2=createSprite(350,320);
  no2.visible=false;

  maybe2=createSprite(550,320);
  maybe2.visible=false;

  yes3=createSprite(50,520);
  yes3.visible=false;

  no3=createSprite(350,520);
  no3.visible=false;

  maybe3=createSprite(550,520);
  maybe3.visible=false;

  yes4=createSprite(50,720);
  yes4.visible=false;

  no4=createSprite(350,720);
  no4.visible=false;

  maybe4=createSprite(550,720);
  maybe4.visible=false;

  yes5=createSprite(50,920);
  yes5.visible=false;

  no5=createSprite(350,920);
  no5.visible=false;

  maybe5=createSprite(550,920);
  maybe5.visible=false;

  c=createSprite(200, 120, 50, 50); 
  c.visible=false;

   q1 = createSprite(400,50,1,1); 
   
   q2 = createSprite(400,250,1,1); 
   q3= createSprite(400,450,1,1); 
   q4= createSprite(400,650,1,1); 
   q5= createSprite(400,850,1,1); 


}

function draw() {   

if(gameState === START) { 
  background("#CB9BE2");   

  fill("black")
  textSize(20) 
  //textFont("Black Jack")
  text("Learn how to stop wasting your time &",20,450) 
  text("Develop your personality",20,470)

  button.mousePressed (()=>{
    gameState = PLAY;
      })
} 
 else if(gameState === PLAY) {
    background("#BEF0F4") 
    a.destroy();
    b.destroy();
    hide()
    c.visible=true;
    c.addImage("h1",h)  
    c.scale = 0.45;
  

button1.visible=true;
button1.addImage(start1);
button1.scale=0.2;

  

    b1 = createButton("Tips to stop procastinating"); 
    b1.position (20,300);

    b2 = createButton("Chat"); 
    b2.position (20,350); 

    b3 = createButton("Talk to an expert"); 
    b3.position (20,400);

    if(mousePressedOver(button1)){
      gameState = QUIZ;
    }
  
  } 

  if(gameState === QUIZ) { 

    background("#F6B6D1")
    c.destroy();
    //hide1();
    button1.destroy();
    b1.hide();
    b2.hide();
    b3.hide();


yes1.visible=true;
yes1.addImage(yes);
yes1.scale=0.2;

no1.visible=true;
no1.addImage(no);
no1.scale=0.05;

maybe1.visible=true;
maybe1.addImage(maybe);
maybe1.scale=0.05;

yes2.visible=true;
yes2.addImage(yes);
yes2.scale=0.2;

no2.visible=true;
no2.addImage(no);
no2.scale=0.05;

maybe2.visible=true;
maybe2.addImage(maybe);
maybe2.scale=0.05;

yes5.visible=true;
yes5.addImage(yes);
yes5.scale=0.2;

no5.visible=true;
no5.addImage(no);
no5.scale=0.05;

maybe5.visible=true;
maybe5.addImage(maybe);
maybe5.scale=0.05;

yes3.visible=true;
yes3.addImage(yes);
yes3.scale=0.2;

no3.visible=true;
no3.addImage(no);
no3.scale=0.05;

maybe3.visible=true;
maybe3.addImage(maybe);
maybe3.scale=0.05;

yes4.visible=true;
yes4.addImage(yes);
yes4.scale=0.2;

no4.visible=true;
no4.addImage(no);
no4.scale=0.05;

maybe4.visible=true;
maybe4.addImage(maybe);
maybe4.scale=0.05;



  
q1.addImage("1",qimg1) ;
q1.scale=0.5;
q2.y=250;
q2.addImage("1",qimg2);
q2.scale=0.5;
q3.y=450;
q3.addImage("1",qimg3);
q3.scale=0.5;
q4.y=650;
q4.addImage("1",qimg4);
q4.scale=0.5;
q5.y=850
q5.addImage("1",qimg5);
q5.scale=0.5;

if(mousePressedOver(yes1)){
  count=1;
  yes1.destroy();

} 
if(mousePressedOver(yes2)){
  yes2.destroy();
 count=2;
}  
if(mousePressedOver(yes3)){
  yes3.destroy();
 count=3;
}  

if(mousePressedOver(yes4)){
  yes4.destroy();
 count=4;
}  

if(mousePressedOver(yes5)){
  yes5.destroy();
 count=5;
} 
if(count===5){
  gameState="tips";
}

  }
  if(gameState==="tips"){
    background("chocolate");
    q1.destroy();
    q2.destroy();
    q3.destroy();
    q4.destroy();
    q5.destroy();
    no1.destroy();
    no2.destroy();
    no3.destroy();
    no4.destroy();
    no5.destroy();
    maybe1.destroy();
    maybe2.destroy();
    maybe3.destroy();
    maybe4.destroy();
    maybe5.destroy();

  }


  drawSprites(); 
 
} 
function hide () {
 // button1.hide();
  button.hide();

  
}
function hide1(){
  button1.hide();


}

