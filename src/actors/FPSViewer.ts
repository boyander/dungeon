import { Point } from "../types/Point";

export class FPSViewer {
  position: Point
  constructor(position: Point) {
    this.position = position;
  }

  keyboardEvent() { }

  update() { }

  draw(delta: any, ctx: any) {
    const fps = (1 / delta).toFixed(2);
    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`FPS: ${fps}`, this.position.x, this.position.y);
  }
}
