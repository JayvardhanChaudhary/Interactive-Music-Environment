let number=1;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  
}

function mouseClicked(){
    if(mouseClicked) {
      textSize(20);
      fill(random(100,220), 100, 150);
      text(number, mouseX, mouseY-10);
      textSize(10);
      fill(0,0,0);
      text(mouseX, mouseX, mouseY);
      text(mouseY, mouseX , mouseY + 16);
      number++;
  } 
}