class Rope {
    constructor(bodyA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:200, 
        }

        this.rope=Constraint.create(options);
        this.pointB=pointB;
        World.add(world , this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        
        line(pointA.x , pointA.y , pointB.x , pointB.y);
    }
    fly(){
        this.rope.bodyA =null;
    }
}