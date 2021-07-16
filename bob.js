class Bob{
    constructor(x, y){
        var options={
            isStatic: false,
            restitution: 1,
            friction: 0.5,
            density: 1.0
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.radius = 40;
        World.add(world, this.body);   
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill(20, 255, 192);
        ellipse(pos.x, pos.y, 40, 40);
        pop();
    }
}