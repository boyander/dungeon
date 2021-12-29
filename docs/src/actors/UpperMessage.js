"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpperMessage = void 0;
const GameMaster_1 = require("./GameMaster");
class UpperMessage {
    constructor(position) {
        this.position = position;
    }
    keyboardEvent() { }
    update() { }
    draw(delta, ctx) {
        ctx.font = "15px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Press 'a' to open the chests", this.position.x + 100, this.position.y);
        ctx.fillText(`Level ${GameMaster_1.myGameMaster.currentLevel}`, this.position.x + 300, this.position.y);
    }
}
exports.UpperMessage = UpperMessage;
