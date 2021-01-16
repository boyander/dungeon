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
  constructor(level = 1) {
    this.level = level;

    // GAME SETTINGS
    this.heroSpeed = LVL[1].heroSpeed;
    this.heroNumber = LVL[1].heroNumber;
    this.myDungeonMap = LVL[1].myDungeonMap;

    // GAME STATUS
    this.skeletonPosition = {};
    this.allChestsOpen = false;
    this.isSkeletonDead = false;

    this.debug = true;
    return this;
  }

  update(deltaSeconds) {}

  keyboardEvent(key) {}

  draw(delta, ctx) {}
}

export const myGameMaster = new GameMaster();
