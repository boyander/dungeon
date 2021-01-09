const POS = {
  0: {
    dir: "right",
    x: 1,
    y: 0,
  },
  1: {
    dir: "left",
    x: -1,
    y: 0,
  },
  2: {
    dir: "up",
    x: 0,
    y: -1,
  },
  3: {
    dir: "down",
    x: 0,
    y: 1,
  },
};

export class Hero {
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

    this.hypoDirections = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    this.abailablesDirections = [];
    this.current_direction = [];
    this.stop = true;

    this.map = map;
  }

  draw(delta, ctx) {
    const frameSize = { x: 120, y: 130 };
    const seqName = this.speed.x === 0 && this.speed.y === 0 ? `still-${this.currentSequence}` : `moving-${this.currentSequence}`;
    const seq = this.sequences.find((s) => s.name === seqName);
    if (!seq) throw new Error("invalid seq");

    // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    ctx.drawImage(
      this.spritesheet,
      frameSize.x * this.framePos,
      frameSize.y * seq.ySeqPos,
      frameSize.x,
      frameSize.y,
      this.position.x - 12,
      this.position.y - 23,
      frameSize.x - 95,
      frameSize.y - 95,
    );

    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 3, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    this.time += delta;
    seq.numFrames === 1 ? this.framePos = Math.floor(this.time * 3) % seq.numFrames : this.framePos = Math.floor(this.time * 10) % seq.numFrames;
  }

  update(deltaSeconds) {
    if (this.current_direction.length < 1 && this.stop) {
      this.abailablesDirections = this.getAbailablesDirections();
      let random = 0;
      random = Math.floor(Math.random() * this.abailablesDirections.length);
      this.current_direction = this.abailablesDirections[random];
      const currentDir = (e) => e === this.current_direction;
      const objectToDraw = POS[this.hypoDirections.findIndex(currentDir)];

      const {
        dir, x, y,
      } = objectToDraw;

      this.currentSequence = dir;
      this.speed.x = x;
      this.speed.y = y;

      this.position.x = this.position.x + this.speed.x;
      this.position.y = this.position.y + this.speed.y;
    }

    const direction = this.current_direction;
    const tip = {
      x: this.position.x - direction[0] * (this.heroSize),
      y: this.position.y - direction[1] * (this.heroSize),
    };

    const tile = this.map.tile(tip, direction);
    if (tile !== "W" && tile !== "i") {
      this.position.x = this.position.x + this.speed.x;
      this.position.y = this.position.y + this.speed.y;
    } else {
      this.current_direction = [];
      this.stop = false;
      this.speed.x = 0;
      this.speed.y = 0;
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
      let tile = this.map.tile(tip, abailablesDirections[i]);
      if (tile !== "W" && tile !== "i" && tile !== false) {
        return abailablesDirections[i];
      }
    });
  }
}
