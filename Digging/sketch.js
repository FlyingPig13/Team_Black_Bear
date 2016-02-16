var xposn = 500
var yposn = 75
var coins;
var score = 0;


function setup() {

  createCanvas(1050, 500)
  background(150, 80, 15)
/*    coins = new Group();
  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }
   player = createSprite(50, 50, 40, 40);
  player.shapeColor = color(255);*/

}

function draw() {

  fill(255, 255, 255)
  rect(25, 0, 1000, 100)
  fill(0, 0, 0)

 ellipse(500,150,10,10)
 //this is the beginning of implementation for movement, this controls 
 //horizontal movement
 var h_movement = function(){
 if((keyIsDown(LEFT_ARROW)) && (xposn >= 0)){
   return xposn -= 1
 }
 if((keyIsDown(RIGHT_ARROW)) && (xposn <= (width - 25))){
  return xposn += 1
}
else{ return xposn
}
}

//this one controls vertical movement
var v_movement = function(){
  if((keyIsDown(UP_ARROW) && (yposn >= 75))){
    return yposn -= 1
  }
  if((keyIsDown(DOWN_ARROW)) && (yposn <= (height - 25))){
    return yposn += 1
  }
  else{ return yposn
  }
}


 
  player.velocity.x = 
    (mouseX-player.position.x)*0.1;
  player.velocity.y = 
    (mouseY-player.position.y)*0.1;
  player.overlap(coins, getCoin);
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}
function getCoin(player, coin) {
  coin.remove();
  score += 1;


var spawn = [h_movement(), v_movement()];
var player = rect(spawn[0], spawn[1], 25, 25)
player; 

}
  

