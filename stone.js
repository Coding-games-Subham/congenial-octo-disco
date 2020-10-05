class stone{
  constructor(){
      var options={
          isStatic:false,
          restitution:0,
          friction:1,
          density:0.2
      }
      this.body=Bodies.circle(200,350,10)
      World.add(world,this.body)
  }
  display(){
      var pos = this.body.position

      ellipse(pos.x,pos.y,10,10)
  }
}