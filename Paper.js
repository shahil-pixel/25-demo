class Paper {
constructor(x,y,radius){
  var options={
  isStatic:false,
  restitution:0.3,
  friction:0.5,
  density:1.2

    }
    tthis.image=loadImage("paper.png");
 this.x=x
 this.y=y
 this.radius=radius
 this.body=Bodies.circle(this.x,this.y,this.radius/2,options)

 World.add(world,this.body);

  }
display(){
  var pos = this.body.position;

    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill("violet");
    ellipse(0,0,this.radius,this.radius);
    pop()
}

}