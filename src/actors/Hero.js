export class Hero {
    framePos = 0;
    time = 0;
    constructor(position, map) {
        this.position = { x: position.x, y: position.y };
        this.heroSize = 10;

        this.spritesheet = new Image();
        this.spritesheet.src = require("../../public/images/link.png");
        this.sequences = [
            { name: "still-down", numFrames: 1, ySeqPos: 0 },
            { name: "still-left", numFrames: 1, ySeqPos: 1 },
            { name: "still-up", numFrames: 1, ySeqPos: 2 },
            { name: "still-right", numFrames: 1, ySeqPos: 3 },
            { name: "moving-down", numFrames: 10, ySeqPos: 4 },
            { name: "moving-left", numFrames: 10, ySeqPos: 5 },
            { name: "moving-up", numFrames: 10, ySeqPos: 6 },
            { name: "moving-right", numFrames: 10, ySeqPos: 7 },
        ];

        this.framePos = 0;
        this.time = 0;
        this.currentSequence = "down";
        this.speed = { x: 0, y: 0 };

        this.current_direction = [];
        
        this.map = map;
    }

    draw(delta, ctx) {

        const frameSize = { x: 120, y: 130 };
        const seqName = this.speed.x == 0 && this.speed.y == 0 ? `still-${this.currentSequence}` : `moving-${this.currentSequence}`;
        const seq = this.sequences.find((s) => s.name == seqName);
        if (!seq) throw new Error("invalid seq");

        ctx.drawImage(
            this.spritesheet,
            frameSize.x * this.framePos,
            frameSize.y * seq.ySeqPos,
            frameSize.x,
            frameSize.y,
            this.position.x - 12,
            this.position.y - 23,
            frameSize.x - 95,
            frameSize.y - 95
        );

        this.time += delta;
        seq.numFrames == 1 ? this.framePos = Math.floor(this.time * 3) % seq.numFrames : this.framePos = Math.floor(this.time * 10) % seq.numFrames;
    }

    update(deltaSeconds) {

        // this.speed.x = this.speed.x+10;

        const hypoDirections = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let direction = [];
        let tip = {};
        let abailables_directions = [];

        // if (!this.current_direction.length > 0) {   

        //     for (let i = 0; i < hypoDirections.length; i++) {
        //         direction = [];
        //         direction.push(hypoDirections[i])
        //         tip = {
        //             x: this.position.x - direction[0] * this.heroSize,
        //             y: this.position.y - direction[1] * this.heroSize,
        //         };
        //         let tile = this.map.tile(tip, direction);
        //         // console.log(tile);
        //         if (tile != "W" && tile != "i" && tile != false) {
        //             abailables_directions.push(direction);
        //         }
        //     }
        // }

    }

    get_direction() {

    }

    keyboard_event(key) {

    }

    keyboard_event_up() {

    }
}