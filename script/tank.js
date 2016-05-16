/**
 * Created by hungtran on 5/16/16.
 */

class Tank{
    constructor(x, y){
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
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
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
}
