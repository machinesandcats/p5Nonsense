//Modified p5 tutorial code - circles will fade to black over time. Click to reset to white. 
/*It turns out that comments don't work that differently from Java
it is weird to not declare a method type for returned values */


let fillValue = 255;

function setup() {
 createCanvas(800,600);
}

function draw() {
  if (mouseIsPressed) {
     fillValue = 255;
  } else {
    fillValue = fade();
  }
  fill(fillValue);
  ellipse(mouseX, mouseY, 80, 80);
}

function fade(){
    if(fillValue > 0){
        fillValue--;
    }
    return fillValue;
}