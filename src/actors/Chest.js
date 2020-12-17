export class Chest {
    constructor(position,id, num, head, col) {
        this.position = { x: Math.floor(Math.random() * (450)) + 1, y: Math.floor(Math.random() * (450)) + 1 };
        this.id = id;
        this.name = "key" + num + id;
        this.value = num;
        this.head = head;
        this.color = col;
        this.isChestOpen = false;

        this.spritesheet = new Image();
        this.spritesheet.src = require("../../public/images/dungeonStuffs3.png");
    }

    update(deltaSeconds) {

    }

    keyboard_event(key) {

    }

    draw(delta, ctx) {

        let selectImageChest = { x: 30, y: 18 }

        let frameSize = { x: 240, y: 174 };
        if (this.isChestOpen) {
            frameSize = { x: 240, y: 208 };
        }

        ctx.drawImage(
            this.spritesheet,
            frameSize.x,
            frameSize.y,
            selectImageChest.x,
            selectImageChest.y,
            this.position.x,
            this.position.y,
            45,
            30
        );

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.head, 13, 8, (1.5 * Math.PI), (0.5 * Math.PI), this.value % 2 ? false : true);
        ctx.closePath();
        this.isChestOpen === true ? ctx.fill() : ctx.stroke()

        if(this.isChestOpen){
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.position.x+15, this.position.y-10, 8, (1.5 * Math.PI), (0.5 * Math.PI), this.value % 2 ? false : true);
            ctx.closePath();
            ctx.fill();
            ctx.stroke()
        }

    }
}