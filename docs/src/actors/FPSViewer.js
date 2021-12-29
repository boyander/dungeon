"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FPSViewer = void 0;
class FPSViewer {
    constructor(position) {
        this.position = position;
    }
    keyboardEvent() { }
    update() { }
    draw(delta, ctx) {
        const fps = (1 / delta).toFixed(2);
        ctx.font = "15px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(`FPS: ${fps}`, this.position.x, this.position.y);
    }
}
exports.FPSViewer = FPSViewer;
