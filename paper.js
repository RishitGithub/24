class Paper{
    constructor(x,y){
        var options= {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
          
        }
      this.body = Bodies.circle(x,y,10,options)
      this.radius = 10;
      World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    
    ellipseMode(RADIUS);
    fill("pink");
    ellipse(0,0,10,10);
    pop();
}
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}