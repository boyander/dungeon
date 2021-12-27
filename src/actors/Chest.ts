import { myDrawManager } from "../effects/DrawManager";
import { Point } from "../types/Point";
import { myGameMaster } from "./GameMaster";

export class Chest {
  position: Point;
  headerPosition: {};
  value: string;
  num: number;
  isChestOpen: boolean
  constructor(position: Point, value: string, num: number, isChestOpen: boolean) {
    this.position = { x: position.x, y: position.y };
    this.headerPosition = { x: 10, y: 10 };
    this.value = value;
    this.num = num;
    this.isChestOpen = isChestOpen;
  }

  draw(delta: any, ctx: any) {
    // if (myGameMaster.start) {}
    if (this.isChestOpen || myGameMaster.debug) {
      myDrawManager.getDrawElements(ctx, "openChest", this.position, delta);
      switch (this.value) {
        case "AA":
          myDrawManager.getDrawElements(ctx, "rock", this.position, delta);
          myDrawManager.getDrawHeaders(ctx, "rock", this.num);
          break;
        case "BB":
          myDrawManager.getDrawElements(ctx, "water", this.position, delta);
          myDrawManager.getDrawHeaders(ctx, "water", this.num);
          break;
        case "CC":
          myDrawManager.getDrawElements(ctx, "fire", this.position, delta);
          myDrawManager.getDrawHeaders(ctx, "fire", this.num);
          break;
        default:
          break;
      }
    } else {
      myDrawManager.getDrawElements(ctx, "closedChest", this.position);
    }
  }
}
