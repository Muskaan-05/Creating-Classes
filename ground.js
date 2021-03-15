class ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.ground=Bodies.rectangle(200,400,400,10,options);
        this.width=400;
        this.height=10;
        World.add(world,this.ground);
    }
display(){
    fill("brown");
    rectMode(CENTER);
    rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
}
}