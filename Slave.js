
class Slave{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility=255;
        this.image=loadImage("c.png");
        World.add(world, this.body);
      }
      display(){
        if (this.body.speed < 10){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
           imageMode(CENTER);
          image(this.image,0,0 , this.width, this.height); 
          pop();
        }
        else{
          World.remove(world,this.body);
          push();
          this.Visibility=this.visibility-5;
          tint(255,this.visiblity);
          pop();
        }
      }
};


