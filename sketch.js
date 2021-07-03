var box
function setup() {
  box=createSprite(200,200,30,30);
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5;
  }
  if(keyIsDown(LEFT_ARROW)){
    background("blue");
  }
  if(keyIsDown(UP_ARROW)){
    background("green");
  }
  if(keyIsDown(DOWN_ARROW)){
    background("red");
  }
  
drawSprites();
}




