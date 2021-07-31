var bg, issImg, scImg1, iss, spacecraft
var hasDocked=false


function preload(){
bg= loadImage("./assets/spacebg.jpg")
issImg=loadImage("./assets/iss.png")
scImg1=loadImage("./assets/spacecraft1.png")
scImg2=loadImage("./assets/spacecraft2.png")
scImg3=loadImage("./assets/spacecraft3.png")
scImg4=loadImage("./assets/spacecraft4.png")
}

function setup() {
  createCanvas(600,350);
  spacecraft=createSprite(285,240)
  spacecraft.addImage(scImg1)
  spacecraft.scale=0.15
  
  iss=createSprite(330,130);
  iss.addImage(issImg);
  iss.scale=0.25

}

function draw() {
  background(bg);  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scImg3)
      spacecraft.x=spacecraft.x-1
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scImg4)
      spacecraft.x=spacecraft.x+1 
      }
      if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(scImg2)
        }
        if(keyDown("UP_ARROW")){
        spacecraft.y=spacecraft.y-1 
          }
  }
  if(spacecraft.y<=(iss.y+70) && spacecraft.x<=(iss.x-10)){
    hasDocked=true
    textSize(25);
    fill("white")
    text("Docking Successful", 200,300)

  }
  drawSprites();
}
