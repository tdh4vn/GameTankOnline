class Brick{
    constructor(i,j){
        this.x = j * 16;
        this.y = i * 16;
        this.sprite = new Image();
        this.sprite.src="images/wall_brick.png";
    }
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
    }
}