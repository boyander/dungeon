export class Chronometer {
    constructor(position) {
        this.position = position;
        this.seg = 0;
        this.min = 0;
    }

    keyboard_event() { }
    update() { }
    draw(delta, ctx) {
        let currentTimer = `Time: `

        this.seg += delta;
        let seg = Math.floor(this.seg);

        if (seg == 60) { this.min++; this.seg = 0; }

        this.min < 10 ? currentTimer = currentTimer + `0` + this.min + `:` : currentTimer = currentTimer + this.min + `:`
        seg < 10 ? currentTimer = currentTimer + `0` + seg : currentTimer = currentTimer + seg

        ctx.fillText(`${currentTimer}`, this.position.x, this.position.y);

    }
}
