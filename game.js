function setup() {
  createCanvas(600, 700);
  }
  
  let state = "start";
  
  let characterX = 100;
  let characterY = 10;
     
  let velocityY = 0.1;
  let acceleration = 0;
     
  //let bounceVelocity = 0.7;
  
  let platform = 0.2;
     
  //let gameState = "true";
  
  function startScreen() { 
  background(48,92,222);
  stroke(50);
  for (let i = 0; i < width; i += 50) {
  line(i, 0, i, height);
  line(0, i, width, i);
      
  }
      
  //Title Text
      textFont('Helvetica'); //Font
      textSize (62);
      fill(255,150,0); // Orange
      textAlign (CENTER,CENTER);
      stroke(60);
      strokeWeight(5);
      text ("Meteorz",  width /2, height / 4 - 45);
      text("Want to play?", width / 2, height / 2 - 50);
      textSize(30);
  
  //Subtitle Text 
      textSize (30);
      fill(255,150,0);
      strokeWeight(5);
      text("Click to start", width / 2, height / 2 + 10);
    
  
  }
  
     function victoryScreen(){
      background(0,255,0);
      fill(255,150,0);
      textFont('Helvetica'); //Font
      text ("You won",300,100);
      textAlign (CENTER);
      strokeWeight(5);
      textSize (62);
      fill(0,0,0); 
  }  
  function gameScreen () {
  background (255,255,0);
  }
  
      
  function gameOverScreen () {
  background (255,0,0);
  textFont('Helvetica'); //Font
  text ("You have lost", 300, 100);
  textAlign (CENTER);
  strokeWeight(5);
  textSize (62);
  fill(0,0,0); 
  
  }
  
  
  
  function gameBackground() {
  //Ground
  fill(0,0,0);
  rect(0,500,600);
  
  
  //Cloud 1
  push();
  fill(255);
  noStroke();
  ellipse(100, 80, 50, 45);
  ellipse(120, 90, 40, 25);
  ellipse(80, 90, 40, 25);
  pop();
  
  
  // Cloud 2
  push();
  fill(255);
  noStroke();
  ellipse(400, 80, 50, 40);
  ellipse(420, 90, 40, 25);
  ellipse(380, 90, 40, 25);
  pop();
  
  
  //Buildings
  fill(0,0,0);
  strokeWeight(1);
  rect(50,400,50,100);
  rect(300,400,25,100);
  rect(300,390,10,20);
  rect(10,400,25,100);
  rect(50,390,50,5);
  rect(400,390,25,100);
  rect(10,300,25,125);
  rect(10,270,10,40);
  rect(70,390,10,20);
  rect(200,350,25,125);
  rect(120,350,50,150);
  rect(500,400,40,100);
  rect(550,380,30,120);
  rect(250,420,60,80);
  rect(190,370,40,130);
  rect(450,300,50,200);
  rect(100,400,30,100);  
  rect(500,350,20,150);  
  rect(400,390,50,5);
  
  }
  
  function character(characterX, characterY) {
  
  translate(characterX, characterY);
  rotate(-HALF_PI);
  //angleMode(DEGREES);
  noStroke();
      
      
  // The outermost dark red flame
  fill(200, 50, 30);
  beginShape();
  vertex(-10, 30);
  vertex(-40,0);
  vertex(-10,-25);
  vertex(120,10);
  endShape(CLOSE);
      
      
  // The outer red flame
  fill(255, 80, 50);
  beginShape();
  vertex(-10, 30);
  vertex(-20, 0);
  vertex(-5, -15);
  vertex(100, 10);
  endShape(CLOSE);
      
  // The inner yellow flame
  fill(255, 170, 0);
  beginShape();
  vertex(-5, 20);
  vertex(-30, 5);
  vertex(-5, -5);
  vertex(80,5); 
  endShape(CLOSE);
      
  // Meteor
  fill(100, 100, 100);
  ellipse(-60, 0, 50, 40);
      
  // Craters on Meteor
  fill(0,0,0);
  ellipse(-50, -5, 8, 10);
  ellipse(-55, 5, 6, 6);
  ellipse(-60, -15, 5, 5);
  ellipse(-65, 10, 10, 10);
      
      
      
  }
   
   
  function draw() {
      
      if (state === "start") {
          startScreen();
      } else if (state === "game") {
          gameScreen ();     
          gameBackground ();
      character (characterX,characterY);
  }  if (state === "win"){
      victoryScreen ();
      
    } if (state === "lose"){
      gameOverScreen();
      }
      if(state === "start") { 
          if (mouseIsPressed) {
      
          state = "game";
          }  }
           if (state === "lose") {
             if (mouseIsPressed){
             state="start";} 
           }   if(state==="win"){
              if (mouseIsPressed) {
                  state="start";
                 }
           }
           
  
          if (state === "game") { 
              //gravitylogic
              characterY = characterY + velocityY;
              velocityY = velocityY + acceleration;
          acceleration+= 0.007;
              //decrease velocity pressing middle button 
              if (keyIsDown (32)){
                 velocityY = velocityY - 2;
              }
  
              //left movement
              if (keyIsDown(37)){
              characterX = characterX -5;
              }
  
              //right movement 
              if (keyIsDown (39)){
              characterX = characterX + 5; 
              }
  
              // position of landing 
              if (state==="game" ){
                  if(characterY >370 ){
                      if( velocityY>15 ) {
               velocityY = 0.1;
              characterY = 0;
              acceleration=0;
              state="lose";
          } else if(velocityY<15){
              velocityY = 0.1;
              characterY = 0;
              acceleration = 0;
             // gamestate = "false";
              state="win";
          }}} }
      }
   
      