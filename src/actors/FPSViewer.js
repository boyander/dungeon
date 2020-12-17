export class FPSViewer {
    constructor(position) {
        this.position = position;
    }

    keyboard_event() {

    }
    update() {

    }
    draw(delta, ctx) {
        const fps = (1 / delta).toFixed(2);
        ctx.font = "15px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(`FPS: ${fps}`, this.position.x, this.position.y);
    }
}
