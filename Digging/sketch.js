var xposn = 500
var yposn = 75

function setup() {
  createCanvas(1050, 500)
  background(150, 80, 15)
}

function draw() {
  fill(255, 255, 255)
  rect(25, 0, 1000, 100)
  
  fill(0, 0, 0)
  
 
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

var spawn = [h_movement(), v_movement()];
var player = rect(spawn[0], spawn[1], 25, 25)
player
}
