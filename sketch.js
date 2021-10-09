var fixedRect
var movingRect






function setup() {
  createCanvas(800,400);

  fixedRect= createSprite(400, 200,50,50)
  movingRect= createSprite(200, 300, 80,50)
  fixedRect.shapeColor= "pink"
  movingRect.shapeColor= "pink"
}

function draw() {
  background("black");  

  movingRect.x = mouseX
  movingRect.y= mouseY

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x- movingRect.x < movingRect.width/2 + fixedRect.width/2 
    && movingRect.y- fixedRect.y<movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    ){

    movingRect.shapeColor= "blue"
    fixedRect.shapeColor= "blue"
  }
  else{

    movingRect.shapeColor= "pink"
    fixedRect.shapeColor= "pink"
  }

  drawSprites();
}