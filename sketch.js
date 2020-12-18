var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(300, 120, 50, 80);
 fixedRect.shapeColor= "blue";

 movingRect= createSprite(180,70,80,30);
 movingRect.shapeColor= "red";

 movingRect.debug= true;
 fixedRect.debug= true;
}

function draw() {
  background(0); 
  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
     fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
     movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
     fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor= "yellow";
  }
  else{
    movingRect.shapeColor= "red";

  }

  drawSprites();
}