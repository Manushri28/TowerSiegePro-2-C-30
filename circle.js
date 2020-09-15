class Circle {
    constructor(x, y, r) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
 
      World.add(world, this.body);
    }
    display(){
      
      fill("yellow");
      var pos = this.body.position;
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };
