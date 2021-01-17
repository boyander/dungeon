/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
export class FPSViewer {
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
