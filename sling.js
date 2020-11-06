class Sling {
    constructor(body1,anchor){
        var options = {
            bodyA:body1,
            pointB:anchor,
            length:10,
            stiffness:0.1
        }

        this.point = anchor

        this.slingshot = Matter.Constraint.create(options)
        World.add(world,this.sling)
    }

   

    display(){

        if (this.sling.bodyA){

        var pointA = this.sling.bodyA.position
        var pointB = this.point

        strokeWeight(5)

        line(pointA.x,pointA.y,pointB.x,pointB.y)

        }

    }
  };