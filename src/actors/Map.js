import { myDrawManager } from "../effects/DrawManager";

const dungeonMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W..S.........WW............W
W.WWWW.iWWWi.WW.iWWWi.WWWW.W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W.WWWW.WWWWW.ii.WWWWW.WWWW.W
W..........................W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
W.iWWi.WWWWi.WW.iWWWW.iWWi.W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W.WWWW.WW..........WW.WWWW.W
W.WWWW.WW.iWWWWWWi.WW.WWWW.W
W.iWWi.WW.W......W.WW.iWWi.W
W.........W......W.........W
W.WWWW.WW.W......W.WW.WWWW.W
W.WWWW.WW.WWi..iWW.WW.WWWW.W
W.WWWW.WW..........WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W............WW............W
W.iWWi.WWWWW.WW.WWWWW.iWWi.W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W...WW................WW...W
WWW.WW.WW.iWWWWWWi.WW.WW.WWW
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.iWWWWWWWWW.WW.WWWWWWWWWi.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
`;

export class Map {
  constructor(tileSize = 23) {
    this.spritesheet = new Image();
    this.spritesheet.src = require("../../public/images/dungeonStuffs4.png");

    this.spritesheet2 = new Image();
    this.spritesheet2.src = require("../../public/images/dungeonWalls2.png");

    this.position = { x: 0, y: 0 };

    this.tileSize = tileSize;
    const rows = dungeonMap.trim().split("\n");
    this.map = rows.map((row) => row.split(""));
    // console.log("Map size", rows[0].length, this.map.length);

    this.time = 0;
    this.count = 0;
  }

  GetDungeonStart() {
    for (let i = 0; i < this.map.length; i += 1) {
      for (let j = 0; j < this.map[i].length; j += 1) {
        if (this.map[i][j] === "S") {
          return this.editedTilePos(i, j);
        }
      }
    }
    throw new Error("Set the S for skeleton start");
  }

  getRandomLocations(element) {
    const availablePositions = [];
    for (let i = 0; i < this.map.length; i += 1) {
      for (let j = 0; j < this.map[i].length; j += 1) {
        if (this.map[i][j] === ".") {
          element === "chest" ? availablePositions.push(this.tilePos(i, j)) : availablePositions.push(this.editedTilePos(i, j))
        }
      }
    }
    return availablePositions;
  }

  posToTile(position) {
    const i = Math.floor((position.x - this.position.x) / this.tileSize);
    const j = Math.floor((position.y - this.position.y) / this.tileSize);
    return [j, i];
  }

  tileAtIndex(tileIndex) {
    try {
      const tile = this.map[tileIndex[0]][tileIndex[1]];
      return tile;
    } catch (error) {
      // console.log("out of bounds");
      return false;
    }
  }

  tile(position, direction) {
    const tileIndex = this.posToTile(position);
    const facing = [tileIndex[0] + direction[1], tileIndex[1] + direction[0]];
    const tile = this.tileAtIndex(facing);
    return tile;
  }

  tilePos(i, j) {
    return {
      x: this.position.x + j * this.tileSize,
      y: this.position.y + i * this.tileSize,
    };
  }

  editedTilePos(i, j) {
    return {
      x: this.position.x + this.tileSize * j + this.tileSize / 2,
      y: this.position.y + this.tileSize * i + this.tileSize / 2,
    };
  }

  drawWall(ctx, i, j) {
    myDrawManager.getDrawElements(ctx, "wall", this.tilePos(i, j));
  }

  drawFloor(ctx, i, j) {
    myDrawManager.getDrawElements(ctx, "floor", this.tilePos(i, j));
  }

  drawTorch(delta, ctx, i, j) {
    this.drawWall(ctx, i, j);
    myDrawManager.getDrawElements(ctx, "torch", this.tilePos(i, j), delta);
  }

  keyboardEvent() { }

  update() { }

  draw(delta, ctx) {
    for (let i = 0; i < this.map.length; i += 1) {
      for (let j = 0; j < this.map[i].length; j += 1) {
        const cell = this.map[i][j];
        if (cell === "W") this.drawWall(ctx, i, j);
        if (cell === "i") this.drawTorch(delta, ctx, i, j);
        if (cell === "." || cell === "S") this.drawFloor(ctx, i, j);
        // if (cell == "O") this.draw_door(ctx, i, j);
      }
    }
  }
}
