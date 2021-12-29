import { mapsArray } from "../../public/assets/maps/mapsArray";
import { Level } from "../types/Level";

const mode: Array<Level> = [
  {
    heroSpeed: 50,
    heroNumber: 4,
    myDungeonMap: mapsArray[0],
    viewField: 250,
  },
  {
    heroSpeed: 70,
    heroNumber: 6,
    myDungeonMap: mapsArray[1],
    viewField: 200,
  },
  {
    heroSpeed: 80,
    heroNumber: 8,
    myDungeonMap: mapsArray[2],
    viewField: 150,
  }
]

class GameMaster {
  currentLevel: number;
  heroSpeed: number;
  heroNumber: number;
  myDungeonMap: string;
  viewField: number;
  skeletonPosition: any;
  allChestsOpen: boolean;
  isSkeletonDead: boolean;
  debug: boolean;

  constructor() {
    this.currentLevel = 1;

    // GAME SETTINGS
    this.heroSpeed = mode[this.currentLevel].heroSpeed;
    this.heroNumber = mode[this.currentLevel].heroNumber;
    this.myDungeonMap = mode[this.currentLevel].myDungeonMap;
    this.viewField = mode[this.currentLevel].viewField;

    // GAME STATUS
    this.skeletonPosition = {};
    this.allChestsOpen = false;
    this.isSkeletonDead = false;

    this.debug = false;
    return this;
  }

  update(deltaSeconds: any) { }

  keyboardEvent(key: any) { }

  draw(delta: any, ctx: any) { }
}

export const myGameMaster = new GameMaster();
