const PICTURES = {
  rock: {
    sheet: "dungeon",
    pos: { x: 0, y: 208 },
    size: { x: 19, y: 18 },
    dest: { x: 40, y: 30 },
    offset: { x: 0, y: 0 },
  },
  water: {
    sheet: "dungeon",
    pos: { x: 16, y: 208 },
    size: { x: 19, y: 18 },
    dest: { x: 40, y: 30 },
    offset: { x: 0, y: 0 },
  },
  fire: {
    sheet: "dungeon",
    pos: { x: 32, y: 208 },
    size: { x: 19, y: 18 },
    dest: { x: 40, y: 30 },
    offset: { x: 0, y: 0 },
  },
  closedChest: {
    sheet: "dungeon",
    pos: { x: 240, y: 174 },
    size: { x: 30, y: 18 },
    dest: { x: 45, y: 30 },
    offset: { x: 0, y: 8 },
  },
  wall: {
    sheet: "dungeon",
    pos: { x: 0, y: 16 },
    size: { x: 20, y: 18 },
    dest: { x: 30, y: 30 },
    offset: { x: 0, y: 0 },
  },
  floor: {
    sheet: "dungeon",
    pos: { x: 64, y: 96 },
    size: { x: 20, y: 18 },
    dest: { x: 30, y: 30 },
    offset: { x: 0, y: 0 },
  },
  openChest: {
    sheet: "dungeon",
    pos: { x: 240, y: 208 },
    size: { x: 30, y: 18 },
    dest: { x: 45, y: 30 },
    offset: { x: 0, y: 8 },
  },
  torch: {
    sheet: "dungeon",
    frames: 8,
    pos: { x: 132, y: 153 },
    size: { x: 16, y: 13 },
    dest: { x: 26, y: 23 },
    offset: { x: -5, y: 8 },
  },
};

const loadSpriteSheet = (url) => {
  const img = new Image();
  img.src = url;
  return img;
};

const SPRITESHEETS = {
  dungeon: loadSpriteSheet(require("../../public/images/dungeonStuffs4.png")),
};

class DrawManager {
  constructor() {
    this.render_torch_time = 0;
  }

  getObject(objectName) {
    const objectToDraw = PICTURES[objectName];
    if (objectToDraw) {
      return objectToDraw;
    }
    throw new Error(`No object to draw with name ${objectName}`);
  }

  // TODO: Animation offset must be different for each object instance
  getDrawElements(ctx, objectName, position, delta = 0, animationOffset = 0) {
    this.render_torch_time += delta;
    const getDrawElements = Math.floor(
      this.render_torch_time + animationOffset / 8,
    );
    const {
      pos, size, dest, frames, offset,
    } = this.getObject(objectName);
    const drawFrame = frames ? getDrawElements % frames : 0;
    ctx.drawImage(
      SPRITESHEETS.dungeon,
      pos.x + size.x * drawFrame,
      pos.y,
      size.x,
      size.y,
      position.x - offset.x,
      position.y - offset.y,
      dest.x,
      dest.y,
    );
  }

  drawHalf(ctx, objectName, position, half = false) {
    const {
      pos, size, dest, offset
    } = this.getObject(objectName);

    ctx.drawImage(
      SPRITESHEETS.dungeon,
      half ? pos.x + size.x / 2 : pos.x,
      pos.y + size.y,
      size.x / 2,
      size.y,
      position.x - offset.x,
      position.y - offset.y,
      dest.x,
      dest.y,
    );
  }

  getDrawHeaders(ctx, objectName, half) {
    const headerPositionBase = { x: 10, y: 10 };
    const typeOffset = {
      rock: { x: 0, y: 0 },
      fire: { x: 20, y: 0 },
      water: { x: 40, y: 0 },
    };
    this.drawHalf(
      ctx,
      objectName,
      {
        x: headerPositionBase.x + typeOffset[objectName].x,
        y: headerPositionBase.y + typeOffset[objectName].y,
      },
      half,
    );
    // const myPosition = 500;
    // // REVISAR: ctx.translate(0,191);

    // if (value == "AA") {
    //   if (num) {
    //     ctx.drawImage(this.spritesheet, 0, 0, 9, 19, myPosition, 13, 20, 40);
    //   } else {
    //     ctx.drawImage(
    //       this.spritesheet,
    //       7,
    //       191,
    //       7,
    //       19,
    //       myPosition + 17,
    //       13,
    //       20,
    //       40
    //     );
    //   }
    // } else if (value == "BB") {
    //   if (num) {
    //     ctx.drawImage(
    //       this.spritesheet,
    //       15,
    //       191,
    //       9,
    //       19,
    //       myPosition + 40,
    //       13,
    //       20,
    //       40
    //     );
    //   } else {
    //     ctx.drawImage(
    //       this.spritesheet,
    //       21,
    //       191,
    //       10,
    //       19,
    //       myPosition + 60,
    //       13,
    //       20,
    //       40
    //     );
    //   }
    // } else if (num) {
    //   ctx.drawImage(
    //     this.spritesheet,
    //     31,
    //     191,
    //     10,
    //     19,
    //     myPosition + 80,
    //     13,
    //     20,
    //     40
    //   );
    // } else {
    //   ctx.drawImage(
    //     this.spritesheet,
    //     39,
    //     191,
    //     10,
    //     19,
    //     myPosition + 100,
    //     13,
    //     20,
    //     40
    //   );
    // }
  }
}
export const myDrawManager = new DrawManager();
