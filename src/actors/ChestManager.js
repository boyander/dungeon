import { Chest } from "./Chest";

class ChestManager {
  constructor() {
    this.latestOpenedChest = "";
    return this;
  }

  update(deltaSeconds) { }

  keyboardEvent(key) { }

  draw(delta, ctx) { }

  setMap(map) {
    this.map = map;
    this.chests = [
      // position,ID,num,head,color
      new Chest(this.chestStartOptions(), "AA", 0, false),
      new Chest(this.chestStartOptions(), "AA", 1, false),
      new Chest(this.chestStartOptions(), "BB", 0, false),
      new Chest(this.chestStartOptions(), "BB", 1, false),
      new Chest(this.chestStartOptions(), "CC", 0, false),
      new Chest(this.chestStartOptions(), "CC", 1, false),
    ];
  }

  chestStartOptions() {
    let availablePositions = [];
    availablePositions = this.map.getRandomLocations("chest");
    let random = 0;
    random = Math.floor(Math.random() * availablePositions.length);
    return availablePositions[random];
  }
}
export const myChestManager = new ChestManager();
