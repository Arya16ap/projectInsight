var girl,girlImage;
var background1Image,background1;
var background2Image,background2;
function preload() {
  girlImage = loadImage("character1.jpg");
  background1Image = loadImage("dungon.jpg");
  background2Image = loadImage("bg.png");
}
function setup() {
  createCanvas(1600,1200);
  background1 = createSprite(600,400,1600,1200);
  background1.addImage("background1",background1Image);
  background1.scale = 5.5;
  background2 = createSprite(600,400,1600,1200);
  background2.addImage("background2",background2Image);
  background2.visible = false;
  
  girl = createSprite(400, 200, 50, 50);
  girl.addImage(girlImage);
  girl.scale = 0.5;

  
}

function draw() {
  background("black"); 
  play = createButton('play');
  createButton.scale = 50;
  play.position(1000,300);
  store = createButton('store');
  store.Width = 50;
  store.Height = 50;
  store.position(1000,250);

  play.mousePressed(function(){
    background2.visible = true;
    play.hide();
    store.hide();
  })


  
  drawSprites();
}