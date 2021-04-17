class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
fly(){
    this.Sling.bodyA=null
}


    display(){
        if(this.Sling.bodyA){

        
        var pointA = this.Sling.bodyA.position;
        var pointB = this.Sling.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}