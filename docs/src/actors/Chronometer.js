"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chronometer = void 0;
const GameMaster_1 = require("./GameMaster");
class Chronometer {
    constructor(position) {
        this.position = position;
        this.seg = 0;
        this.min = 0;
    }
    keyboardEvent() { }
    update() { }
    draw(delta, ctx) {
        if (!GameMaster_1.myGameMaster.isSkeletonDead && !GameMaster_1.myGameMaster.allChestsOpen) {
            this.seg += delta;
        }
        let seg = Math.floor(this.seg);
        if (this.seg < 10) {
            seg = parseInt(`0${seg}`);
        }
        if (seg === 60) {
            this.min += 1;
            this.seg = 0;
        }
        const currentTimer = `Time: ${this.min}:${seg}`;
        ctx.font = "15px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(`${currentTimer} `, this.position.x, this.position.y);
    }
}
exports.Chronometer = Chronometer;
