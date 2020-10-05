class Mango{
    constructor(x,y,width,height){
     var options = {
         isStaic:true,
         friction:1,
         restitution:0
     }
     this.width=width;
     this.height = height;
     this.body = Bodies.circle(x,y,this.width,this.height)
     this.image = loadImage("Plucking mangoes/mango.png");
    }
    display(){
        var pos = this.body.position
     ellipse(pos.x,pos.y,this.width,this.height);
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,50,50);
    }
}