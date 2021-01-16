export class Message {
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
      this.position.x + 150,
      this.position.y,
    );
  }
}