import { Chest } from "./Chest";
import { Map } from "./Map";

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
    return this;
  }

  update(deltaSeconds) { }

  keyboardEvent(key) { }

  draw(delta, ctx) { }

  setMap(map) {
    this.map = map;
  }

  chestStartOptions() {
    const map = new Map();
    let availablePositions = [];
    availablePositions = map.getRandomLocations();
    let random = 0;
    random = Math.floor(Math.random() * availablePositions.length);
    return availablePositions[random];
  }
}
export const myChestManager = new ChestManager();
