/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { myGameMaster } from "./GameMaster";
import { myMap } from "./Map";
import { Chest } from "./Chest";

class ChestManager {
  constructor() {
    this.chests = [
      // position,ID,num,head,color
      new Chest(this.chestStartOptions(), "AA", 0, false),
      new Chest(this.chestStartOptions(), "AA", 1, false),
      new Chest(this.chestStartOptions(), "BB", 0, false),
      new Chest(this.chestStartOptions(), "BB", 1, false),
      new Chest(this.chestStartOptions(), "CC", 0, false),
      new Chest(this.chestStartOptions(), "CC", 1, false),
    ];
    this.latestOpenedChest = "";
    this.chestInfo = [];
    return this;
  }

  update(deltaSeconds) { }

  keyboardEvent(key) { }

  draw(delta, ctx) { }

  chestStartOptions() {
    let availablePositions = [];
    availablePositions = myMap.getRandomLocations("chest");
    let random = 0;
    random = Math.floor(Math.random() * availablePositions.length);
    return availablePositions[random];
  }

  checkChestsStatus() {
    myGameMaster.allChestsOpen = this.chests.every((e) => e.isChestOpen === true);
  }
}
export const myChestManager = new ChestManager();
