"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myGameMaster = void 0;
const mapsArray_1 = require("../../public/assets/maps/mapsArray");
const mode = [
    {
        heroSpeed: 50,
        heroNumber: 4,
        myDungeonMap: mapsArray_1.mapsArray[0],
        viewField: 250,
    },
    {
        heroSpeed: 70,
        heroNumber: 6,
        myDungeonMap: mapsArray_1.mapsArray[1],
        viewField: 200,
    },
    {
        heroSpeed: 80,
        heroNumber: 8,
        myDungeonMap: mapsArray_1.mapsArray[2],
        viewField: 150,
    }
];
class GameMaster {
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
    update(deltaSeconds) { }
    keyboardEvent(key) { }
    draw(delta, ctx) { }
}
exports.myGameMaster = new GameMaster();
