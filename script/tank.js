/**
 * Created by hungtran on 5/16/16.
 */

class Tank{
    constructor(x, y){
        this.readyShot = true;
        this.bullet;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.spriteUp = new Image();
        this.spriteDown = new Image();
        this.spriteLeft = new Image();
        this.spriteRight = new Image();
        this.spriteUp.src = "images/tank_fast_up_c0_t2_f.png";
        this.spriteDown.src = "images/tank_fast_down_c0_t2_f.png";
        this.spriteLeft.src = "images/tank_fast_left_c0_t2_f.png";
        this.spriteRight.src = "images/tank_fast_right_c0_t2_f.png";
        this.sprite = this.spriteUp;
        this.direction = 1;//bien luu huong di chuyen hien tai cua tank
    }
    checkCollision(rect1, rect2){
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
                return true;
            }
        return false;
    }
    update(){
        var isMove = true;
        var rect1 = {x:this.x + this.speedX, y:this.y + this.speedY, width:32, height:32};
        for(var i = 0; i < arrBrick.length; i++){
            var rect2 = {x:arrBrick[i].x, y: arrBrick[i].y, width:16, height:16};
            if(this.checkCollision(rect1, rect2) == true){
                isMove = false;
                break;
            }
        }
        if(isMove == true){
            this.x += this.speedX;
            this.y += this.speedY;
        }
        if(this.readyShot == false){
            this.bullet.update();
        }
    }
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
        if(this.readyShot == false){
            this.bullet.draw(context);
        }
    }
    move(direction){
        switch (direction){
            case 1://up
                this.speedY = -3;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = 1;
                break;
            case 2://down
                this.speedY = 3;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = 2;
                break;
            case 3://left
                this.speedX = -3;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = 3;
                break;
            case 4://right
                this.speedX = 3;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = 4;
                break;
        }
    }
    
    shoot(){
        if(this.readyShot == true){
            this.readyShot = false;
            this.bullet = new Bullet(this.x+13, this.y+13, this.direction);
        }
    }
}
