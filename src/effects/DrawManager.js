import { myGameMaster } from "../actors/GameMaster";

const PICTURES = {
  rock: {
    sheet: "dungeon",
    pos: { x: 0, y: 207 },
    size: { x: 18, y: 16 },
    dest: { x: 40, y: 30 },
    offset: { x: 0, y: 0 },
  },
  water: {
    sheet: "dungeon",
    pos: { x: 16, y: 207 },
    size: { x: 18, y: 16 },
    dest: { x: 40, y: 30 },
    offset: { x: 0, y: 0 },
  },
  fire: {
    sheet: "dungeon",
    pos: { x: 32, y: 207 },
    size: { x: 18, y: 16 },
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
  openChest: {
    sheet: "dungeon",
    pos: { x: 240, y: 208 },
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

  getDrawElements(ctx, objectName, position, delta = 0, animationOffset = 0) {
    this.render_torch_time += delta;
    const getDrawElements = Math.floor(
      this.render_torch_time + animationOffset / 8,
    );
    const {
      pos, size, dest, frames, offset,
    } = this.getObject(objectName);
    const drawFrame = frames ? getDrawElements % frames : 0;
    // ctx.globalAlpha = 1;
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
      pos, size, dest, offset,
    } = this.getObject(objectName);
    // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    ctx.drawImage(
      SPRITESHEETS.dungeon,
      half ? pos.x + size.x / 2 : pos.x,
      pos.y - size.y,
      size.x / 2,
      size.y,
      half ? position.x + 28 - offset.x : position.x - offset.x,
      position.y,
      dest.x - 12,
      dest.y,
    );
  }

  getDrawHeaders(ctx, objectName, half) {
    const headerPositionBase = { x: 450, y: 10 };
    const typeOffset = {
      rock: { x: 0, y: 0 },
      fire: { x: 50, y: 0 },
      water: { x: 100, y: 0 },
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
  }
}
export const myDrawManager = new DrawManager();
