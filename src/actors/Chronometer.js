export class Chronometer {
  constructor(position) {
    this.position = position;
    this.seg = 0;
    this.min = 0;
  }

  keyboardEvent() { }

  update() { }

  draw(delta, ctx) {
    this.seg += delta;
    let seg = Math.floor(this.seg);
    if (this.seg < 10) { seg = "0" + seg; }
    if (seg === 60) { this.min += 1; this.seg = 0; }
    const currentTimer = `Time: ${this.min}:${seg}`;

    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`${currentTimer}`, this.position.x, this.position.y);
  }
}
