class GreyBox extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility = 255;

  }

display(){
  if(this.body.speed < 3){
    fill(169,169,169)
    super.display()
  }
  else{
    World.remove(world, this.body);
    push();
    this.visibility = this.visibility - 5;
    tint(255, this.visibility);
    pop();
  }
}
}