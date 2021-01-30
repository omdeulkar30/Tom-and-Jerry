var Tom, Jerry
var tomImage1,tomImage2,  tomImage3,  tomImage4, jerryImage1,  jerryImage2, jerryImage3, jerryImage4
var ground, groundImage
function preload() {
      //load the images here
    groundImage=loadImage("images/garden.png") 
    tomImage1=loadAnimation("images/cat1.png")
    tomImage2=loadAnimation("images/cat2.png", "images/cat3.png")
    tomImage3=loadAnimation("images/cat4.png")
    tomImage4=loadImage("images/Tom_scared.png")
    jerryImage1=loadAnimation("images/mouse1.png")
    jerryImage2=loadAnimation("images/mouse2.png", " images/mouse3.png")
    jerryImage3=loadAnimation("images/mouse4.png")
    jerryImage4=loadImage("images/Jerry_angry.jpg")
  }


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
Tom=createSprite(870,  600)
Tom.addAnimation("toms", tomImage1)
Tom.scale=0.2
Jerry=createSprite(200, 600)
Jerry.addAnimation("jerrys", jerryImage1)
Jerry.scale=0.15  
}

function draw() {

    background(groundImage);
  if(Tom.x-Jerry.x<(Tom.width-Jerry.width)/2)
  {
    Tom.velocityX=0
    Tom.addAnimation("Toml", tomImage3)
  Tom.x=300
Tom.scale=0.2
Tom.changeAnimation("Toml")
Jerry.addAnimation("Jerryl", jerryImage3)
Jerry.scale=0.15
Jerry.changeAnimation("Jerryl")
  }
    //Write condition here to evalute if tom and jerry collide
    if (Tom.isTouching(Jerry)){
      Jerry.addImage("Jerry_angry.jpg", jerryImage4)
      Tom.addImage("Tom_scared.png", tomImage4)
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW)
{
  Tom.velocityX=-5
  Tom.addAnimation("Tomr", tomImage2)
  Tom.changeAnimation("Tomr")
  Jerry.addAnimation("Jerryr", jerryImage2)
  Jerry.frameDelay=25
  Jerry.changeAnimation("Jerryr")
  


}
}