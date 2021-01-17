/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { myGameMaster } from "./GameMaster";

export class UpperMessage {
  constructor(position) {
    this.position = position;
  }

  keyboardEvent() {}

  update() {}

  draw(delta, ctx) {
    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(
      "Press A to open the chests",
      this.position.x + 100,
      this.position.y,
    );
    ctx.fillText(
      `Level ${myGameMaster.level}`,
      this.position.x + 300,
      this.position.y,
    );
  }
}
