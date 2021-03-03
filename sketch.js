var hr
var min
var sec
function setup() {
  createCanvas(800,400);
  translate(0,0)
  
  
}

function draw() {
  background("black");  
  hr = hour()
  sec = second()
  min = minute()



  angleMode(DEGREES)

  secAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hrAngle = map(hr%12,0,12,0,360)
  translate(400,200)

  



  //fill("red")
  //ellipse(0,0,400,300)

  push()
  rotate(secAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  
  pop()

  

  push()
  rotate(minAngle)
  stroke("yellow")
  strokeWeight(7)
  line(0,0,150,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,60,0)
  pop()

  noFill()
  stroke("red")
  strokeWeight(10)
  arc(0,0,350,350,0,secAngle)
  noFill()
  stroke("green")
  strokeWeight(10)
  arc(0,0,320,320,0,minAngle)
  noFill()
  stroke("yellow")
  strokeWeight(10)
  arc(0,0,300,300,0,hrAngle)
  


  drawSprites();

}