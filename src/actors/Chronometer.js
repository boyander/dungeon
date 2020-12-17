export class Chronometer {
    constructor(position) {
        this.position = position;
        this.seg = 0;
        this.min = 0;
    }

    keyboard_event() { }
    update() { }
    draw(delta, ctx) {
        
        this.seg += delta;
        let seg = Math.floor(this.seg);
        let currentTimer = `Time: ${this.min}:${seg} segundos`
        if (seg == 60) { this.min++; this.seg = 0; }

        ctx.font = "15px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(`${currentTimer}`, this.position.x, this.position.y);

    }
}
