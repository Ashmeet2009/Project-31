class Plinko{
    constructor(x, y, w, h){
        var options={
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
       this.body = Bodies.circle(0,0,30);
        World.add(world, this.body);

     
    }
    display(){
       var pos = this.body.position;
       rectMode(CENTER);
       fill("white");
       rect(100,200,this.w,this.h);        
    }
};