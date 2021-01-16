import { dungeonMap } from "../../public/assets/maps/dungeonMaps";

const LVL = {
  1: {
    heroSpeed: 50,
    heroNumber: 4,
    myDungeonMap: dungeonMap[1],
  },
  2: {
    heroSpeed: 70,
    heroNumber: 6,
    myDungeonMap: dungeonMap[2],
  },
  3: {
    heroSpeed: 80,
    heroNumber: 8,
    myDungeonMap: dungeonMap[3],
  },
};

class GameMaster {
  constructor() {
    this.level = 1;
    this.start = true;

    // GAME SETTINGS
    this.heroSpeed = LVL[this.level].heroSpeed;
    this.heroNumber = LVL[this.level].heroNumber;
    this.myDungeonMap = LVL[this.level].myDungeonMap;

    // GAME STATUS
    this.skeletonPosition = {};
    this.allChestsOpen = false;
    this.isSkeletonDead = false;

    this.debug = false;
    return this;
  }

  update(deltaSeconds) {}

  keyboardEvent(key) {}

  draw(delta, ctx) {}
}

export const myGameMaster = new GameMaster();
