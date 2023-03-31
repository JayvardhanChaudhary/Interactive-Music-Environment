let px;
let py;
var amp;
let ar;
let ge;
let be;


let volhistory = [];                                            
let bubbles = [];                                       //variables and arrays

function preload() {
  noteA = loadSound("A key.mp3");
  noteB = loadSound("B key.mp3");
  noteC = loadSound("C key.mp3");
  noteD = loadSound("D key.mp3");
  noteE = loadSound("E key.mp3");
  noteF = loadSound("F key.mp3");
  noteG = loadSound("G key.mp3");                        //preloaded notes
}

function setup() {
  createCanvas(600, 400);                                //canvas
  noCursor();                                            //no cursor
  noFill();                                              //default no fill
  amp = new p5.Amplitude();                              //assigning value of vol to variable
  frameRate(30);                                         //changning framerate to adjust sound
}

function keyPressed(){
  let r = random(10, 80);
  let x = random(0, width);
  let y = random(0, height);                            
  let b = new Bubble( x, y, r);                            //variables for bubbles
  bubbles.push(b);                                         //pushing bubbles
}



function draw() {
  background(0);                                          //background
  let vol = amp.getLevel();                               //assigning amp value to variable
  volhistory.push(vol);                                   //pushing value of volume from array
  ar = random(0,255);
  ge = random(0,255);
  be = random(0,255);                                     //variables for colours
  
  
  stroke(ar, ge, be);
  beginShape();                                          //open shape for audio visualizer
  for (let j = 0; j < volhistory.length; j++ ){
    let a = map(volhistory[j], 0, 1, height, 0);        //for loop to make vertices on the
    vertex(j, a);                                       //open shape to visualize audio
    
  }
  endShape();                                          //close shape for audio visualizer
  
  if(volhistory.length > width) { 
    volhistory.splice(0,1);                        //splice to keep the visualizer on screen
  }
  
  
  
  stroke(255);
  point(mouseX,mouseY);                                //point
  
  for (let i = 0; i < bubbles.length; i++) {
  bubbles[i].move();
  bubbles[i].show();                                    //calling bubbles
  }
}


class Bubble {                                          //class for bubbles
    
  constructor(x, y, r){                                //constructor
    this.x = x;
    this.y = y;
    this.r = r;
  }
  
  move(){
     if(this.x > width){
    this.x = this.x - 8;
  }
  
     if(this.x < 0){
    this.x = this.x + 8;
  }
  
    else if(this.y > height){
    this.y = this.y - 8
  }
  
    else if(this.y < 0){
    this.y = this.y + 8                                  //to keep the bubbles on canvas
  }
  
    else{
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);                      //to make the bubbles move
  }
 }
  

  show(){ 
  stroke(255);
  strokeWeight(5);
  let distX = mouseX - this.x;
  let distY = mouseY - this.y;
  let distance = sqrt((distX*distX) + (distY*distY));  //collision detection
  
  if (mouseIsPressed && distance <= this.r && this.r < 20){
    stroke(ar, ge, be);
    noteA.play();
  }
    else{
      fill(0);
    }
    
    if (mouseIsPressed && distance <= this.r && this.r < 30 && this.r > 20){
    stroke(ar, ge, be);
    noteB.play();
  }
    
    else{
      noFill();
    }
  if (mouseIsPressed && distance <= this.r && this.r < 40 && this.r > 30){
    stroke(ar, ge, be);
    noteC.play();
  }
    else{
      noFill();
    }
    
    if (mouseIsPressed && distance <= this.r && this.r < 50 && this.r > 40){
    stroke(ar, ge, be);
    noteD.play();
  }
    else{
      noFill();
    }
    
    if (mouseIsPressed && distance <= this.r && this.r < 60 && this.r > 50){
    stroke(ar, ge, be);
    noteE.play();
  }
    else{
      noFill();
    }
    if (mouseIsPressed && distance <= this.r && this.r < 70 && this.r > 60){
    stroke(ar, ge, be);
    noteF.play();
  }
    else{
      noFill();
    }
    if (mouseIsPressed && distance <= this.r && this.r > 70){
    stroke(ar, ge, be);
    noteG.play();
  }
    else{
      noFill();                                               //if statemates for notes
    }
    ellipse(this.x, this.y, this.r * 2);                      //forming bubbles
    }
  }