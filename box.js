class binWall {
    constructor(x, y, width, height) {
       var options = { 
            'restitution': 0.8,
            'friction':0.4,
            'density':1.0
         }
         this.body = Bodies.rectangle (x, y, width, height, options);
         this.width = width;
         this. height = height;
         
         World.add (world, this.body);
     }
         display() {
             var pos = this.body.position;
             Push();
             translate(pos.x, pos.y);
             rectMode(CENTER);
             strokeWeight(4);
             stroke("green");
             fill('white');
             //rect(pos.x, pos.y, this.width, this.height);
             rect(0, 0, this.width, this.height);
             Pop();
                 
         }
    
 };