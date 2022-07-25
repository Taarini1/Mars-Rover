canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_height = 90;
rover_width = 150;

rover_x = 10;
rover_y = 10;


rover_img = "rover.png";

nasa_mars_images = ["img_2.jpg","img_3.jpg","img_4.jpg"];
Random = Math.floor(Math.random()*3);
background_img = nasa_mars_images[Random];


function add(){
     background_img_tag = new Image()
    background_img_tag.src = background_img;
    background_img_tag.onload=uploadbackground;
    
     background_img_rover = new Image();
    background_img_rover.src = rover_img;
    background_img_rover.onload=uploadrover;
}
function uploadbackground(){
ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(background_img_rover,rover_x,rover_y,rover_width,rover_height); 
}


canvas.addEventListener("keydown",my_keydown)
function my_keydown(e){
var Letters = e.keyCode
console.log (Letters)
 if (Letters=="37") {
    Left()
 }     
 if (Letters=="38") {
    Up()
 }  
 if (Letters=="39") {
    Right()
 }    
 if (Letters=="40") {
    Down()
 } 
}


function Left(){
  if (rover_x>=0){
   rover_x=rover_x-10;
   uploadbackground();
   uploadrover();
  }
}

function Right(){
   if (rover_x<=850){
    rover_x=rover_x+10;
    uploadbackground();
    uploadrover();
   }
 }

 function Up(){
   if (rover_y>=0){
    rover_y=rover_y-10;
    uploadbackground();
    uploadrover();
   }
 }

 function Down(){
   if (rover_y<=510){
    rover_y=rover_y+10;
    uploadbackground();
    uploadrover();
   }
 }


