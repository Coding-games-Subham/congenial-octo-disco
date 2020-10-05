class ground{
constructor(){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(400,650,800,100,options)
    World.add(world,this.body)
}
display(){
    fill("orange")
var pos = this.body.position;
rect(pos.x,pos.y,800,100)
}
}