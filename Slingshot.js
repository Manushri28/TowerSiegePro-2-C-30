class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    attach(body){
      this.chain.bodyA = body;
   }

    Fly(){
        this.chain.bodyA = null;
    }

    display(){
      if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(3);
        stroke("aqua");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }
}