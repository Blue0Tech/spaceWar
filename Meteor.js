class Meteor {
    constructor(x,y,r,velX,velY) {
        var options = {
            isStatic : false,
            frictionAir : 0
        }
        this.body = Bodies.circle(x,y,r,options);
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.circleRadius = r;
        this.body.force.x = velX;
        this.body.force.y = velY;
        World.add(world,this.body);
    }
    display() {
        circle(this.body.position.x,this.body.position.y,this.body.circleRadius);
    }
}