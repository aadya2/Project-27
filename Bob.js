class Bob {
    constructor(x, y){
     var options = {
         'isStatic': true,
         'restitution': false,
         'friction': 0.5,
         'density': 1.2
      }
       
       this.body = Bodies.circle(x, y, 70, options);
       this.diameter = 70;       
       World.add(world, this.body);
   }
     display(){

       var pos = this.body.position;
       fill(25, 255, 0);
       ellipseMode(CENTER);
       circle(pos.x, pos.y, this.diameter);

 }
 
}