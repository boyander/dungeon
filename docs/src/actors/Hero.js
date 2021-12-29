"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const GameMaster_1 = require("./GameMaster");
const linkIMG = require("../../public/images/link.png");
const POS = {
    0: {
        currentSequence: "right",
        speedX: GameMaster_1.myGameMaster.heroSpeed,
        speedY: 0,
    },
    1: {
        currentSequence: "left",
        speedX: -GameMaster_1.myGameMaster.heroSpeed,
        speedY: 0,
    },
    2: {
        currentSequence: "up",
        speedX: 0,
        speedY: -GameMaster_1.myGameMaster.heroSpeed,
    },
    3: {
        currentSequence: "down",
        speedX: 0,
        speedY: GameMaster_1.myGameMaster.heroSpeed,
    },
};
class Hero {
    constructor(position, map) {
        this.position = { x: position.x, y: position.y };
        this.heroSize = 10;
        this.spritesheet = new Image();
        this.spritesheet.src = linkIMG;
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
        this.hypoDirections = [
            [1, 0],
            [-1, 0],
            [0, -1],
            [0, 1],
        ];
        this.abailablesDirections = [];
        this.current_direction = [];
        this.stop = true;
        this.map = map;
    }
    draw(delta, ctx) {
        // if (myGameMaster.start) {}
        const frameSize = { x: 120, y: 130 };
        const seqName = this.speed.x === 0 && this.speed.y === 0
            ? `still-${this.currentSequence}`
            : `moving-${this.currentSequence}`;
        const seq = this.sequences.find((s) => s.name === seqName);
        if (!seq)
            throw new Error("invalid seq");
        // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        ctx.drawImage(this.spritesheet, frameSize.x * this.framePos, frameSize.y * seq.ySeqPos, frameSize.x, frameSize.y, this.position.x - 12, this.position.y - 23, frameSize.x - 95, frameSize.y - 95);
        // ctx.beginPath();
        // ctx.arc(this.position.x, this.position.y, 3, 0, 2 * Math.PI);
        // ctx.closePath();
        // ctx.fill();
        this.time += delta;
        if (seq.numFrames === 1) {
            this.framePos = Math.floor(this.time * 3) % seq.numFrames;
        }
        else {
            this.framePos = Math.floor(this.time * 10) % seq.numFrames;
        }
        this.killSkeleton();
    }
    update(deltaSeconds) {
        if (GameMaster_1.myGameMaster.allChestsOpen) {
            this.currentSequence = "down";
            this.speed = { x: 0, y: 0 };
        }
        else {
            if (this.current_direction.length < 1) {
                this.setDirection();
            }
            this.getMove(deltaSeconds);
        }
    }
    getAbailablesDirections() {
        let tip = {};
        const abailablesDirections = this.hypoDirections;
        return abailablesDirections.filter((e, i) => {
            tip = {
                x: this.position.x - abailablesDirections[i][0] * this.heroSize,
                y: this.position.y - abailablesDirections[i][1] * this.heroSize,
            };
            const tile = this.map.tile(tip, abailablesDirections[i]);
            if (tile !== "W" && tile !== "i") {
                return abailablesDirections[i];
            }
        });
    }
    setDirection() {
        this.abailablesDirections = this.getAbailablesDirections();
        let random = 0;
        random = Math.floor(Math.random() * this.abailablesDirections.length);
        this.current_direction = this.abailablesDirections[random];
    }
    getMove(deltaSeconds) {
        const currentDir = (e) => e === this.current_direction;
        const objectToDraw = POS[this.hypoDirections.findIndex(currentDir)];
        const { currentSequence, speedX, speedY } = objectToDraw;
        this.currentSequence = currentSequence;
        this.speed.x = speedX;
        this.speed.y = speedY;
        this.nextTile(deltaSeconds);
    }
    nextTile(deltaSeconds) {
        const newPosX = this.position.x + this.speed.x * deltaSeconds;
        const newPosY = this.position.y + this.speed.y * deltaSeconds;
        const direction = this.current_direction;
        const tip = {
            x: this.position.x - direction[0] * this.heroSize,
            y: this.position.y - direction[1] * this.heroSize,
        };
        const tile = this.map.tile(tip, direction);
        if (tile !== "W" && tile !== "i") {
            this.position.x = newPosX;
            this.position.y = newPosY;
        }
        else {
            this.current_direction = [];
        }
    }
    killSkeleton() {
        let distance = 0;
        distance = Math.sqrt(Math.pow(this.position.x - GameMaster_1.myGameMaster.skeletonPosition.x, 2)
            + Math.pow(this.position.y - GameMaster_1.myGameMaster.skeletonPosition.y, 2));
        if (distance < 15) {
            GameMaster_1.myGameMaster.isSkeletonDead = true;
        }
    }
}
exports.Hero = Hero;