import { myDrawManager } from '../effects/DrawManager';
export class Chest {
    constructor(position, value, head, col, isChestOpen) {
        this.position = { x: position.x, y: position.y };
        this.value = value;
        this.head = head;
        this.color = col;
        this.isChestOpen = isChestOpen;

        this.spritesheet = new Image();
        this.spritesheet.src = require("../../public/images/dungeonStuffs3.png");
    }

    update(deltaSeconds) {

    }

    keyboard_event(key) {

    }

    draw(delta, ctx) {

        let chestStatus = "";
        this.isChestOpen ? chestStatus = "openChest" : chestStatus = "closedChest";

        myDrawManager.get_draw(ctx, chestStatus, this.position);        

        // ctx.fillStyle = this.color;
        // ctx.beginPath();
        // ctx.arc(this.head, 13, 8, (1.5 * Math.PI), (0.5 * Math.PI), this.value % 2 ? false : true);
        // ctx.closePath();
        // this.isChestOpen === true ? ctx.fill() : ctx.stroke()

        // if (this.isChestOpen) {
        //     ctx.fillStyle = this.color;
        //     ctx.beginPath();
        //     ctx.arc(this.position.x + 15, this.position.y - 10, 8, (1.5 * Math.PI), (0.5 * Math.PI), this.value % 2 ? false : true);
        //     ctx.closePath();
        //     ctx.fill();
        //     ctx.stroke()
        // }

    }
}