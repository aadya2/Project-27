class Roof {
    constructor(){
       var options = {
        'isStatic': true
       }
     this.body = Bodies.rectangle(400, 80, 350, 50, options);
     this.width = 350;
     this.height = 50;
     World.add(world, this.body);   
    }
    
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
}