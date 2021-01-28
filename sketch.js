var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 50);
  fixedrect.shapeColor="green"
  movingrect = createSprite(400,200,60,15);
  movingrect.shapeColor="green"
}

function draw() {
  background(255,255,255); 
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY 
  console.log(movingrect.x-fixedrect.x);
  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2 ){
    fixedrect.shapeColor="red"
    movingrect.shapeColor="red"
  }
  else {
    fixedrect.shapeColor="green"
    movingrect.shapeColor="green"
  }
  drawSprites();
}



















