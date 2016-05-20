class Bullet{
    constructor(x,y,dir){//new Bullet(1,1,1)
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.spriteUp = new Image();
        this.spriteDown = new Image();
        this.spriteLeft = new Image();
        this.spriteRight = new Image();
        this.sprite = new Image();
        this.sprite.src = "images/bullet_up.png";
        this.spriteUp.src="images/bullet_up.png";
        this.spriteDown.src="images/bullet_down.png";
        this.spriteLeft.src="images/bullet_left.png";
        this.spriteRight.src="images/bullet_right.png";
        switch(dir){
            case 1://up
                this.speedY = -3;
                this.sprite = this.spriteUp;
                break;
            case 2://down
                this.speedY = 3;
                this.sprite = this.spriteDown;
                break;
            case 3://left
                this.speedX = -3;
                this.sprite = this.spriteLeft;
                break;
            case 4://right
                this.speedX = 3;
                this.sprite = this.spriteRight;
                break;
        }
    }
    
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
    }
}

