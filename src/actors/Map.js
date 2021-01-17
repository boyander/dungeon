/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { myDrawManager } from "../effects/DrawManager";
import { myGameMaster } from "./GameMaster";

class Map {
  constructor(tileSize = 23) {
    this.position = { x: 0, y: 0 };
    this.tileSize = tileSize;
    const rows = myGameMaster.myDungeonMap.trim().split("\n");
    this.map = rows.map((row) => row.split(""));
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
          element === "chest"
            ? availablePositions.push(this.tilePos(i, j))
            : availablePositions.push(this.editedTilePos(i, j));
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
    const animationOffset = Math.floor(Math.random() * 8);
    myDrawManager.getDrawElements(
      ctx,
      "torch",
      this.tilePos(i, j),
      delta,
      animationOffset,
    );
  }

  keyboardEvent() {}

  update() {}

  draw(delta, ctx) {
    for (let i = 0; i < this.map.length; i += 1) {
      for (let j = 0; j < this.map[i].length; j += 1) {
        const cell = this.map[i][j];
        if (cell === "W") this.drawWall(ctx, i, j);
        if (cell === "i") this.drawTorch(delta, ctx, i, j);
        if (cell === "." || cell === "S" || cell === "e") this.drawFloor(ctx, i, j);
      }
    }
  }
}
export const myMap = new Map();
