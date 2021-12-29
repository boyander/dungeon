import { Point } from "../types/Point";
import { myGameMaster } from "./GameMaster";

export class UpperMessage {
  position: Point
  constructor(position: Point) {
    this.position = position;
  }

  keyboardEvent() { }

  update() { }

  draw(delta: any, ctx: any) {
    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(
      "Press 'a' to open the chests",
      this.position.x + 100,
      this.position.y,
    );
    ctx.fillText(
      `Level ${myGameMaster.currentLevel}`,
      this.position.x + 300,
      this.position.y,
    );
  }
}
