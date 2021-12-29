"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myChestManager = void 0;
const GameMaster_1 = require("./GameMaster");
const Map_1 = require("./Map");
const Chest_1 = require("./Chest");
class ChestManager {
    constructor() {
        this.chests = [
            // position,ID,num,head,color
            new Chest_1.Chest(this.chestStartOptions(), "AA", 0, false),
            new Chest_1.Chest(this.chestStartOptions(), "AA", 1, false),
            new Chest_1.Chest(this.chestStartOptions(), "BB", 0, false),
            new Chest_1.Chest(this.chestStartOptions(), "BB", 1, false),
            new Chest_1.Chest(this.chestStartOptions(), "CC", 0, false),
            new Chest_1.Chest(this.chestStartOptions(), "CC", 1, false),
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
        availablePositions = Map_1.myMap.getRandomLocations("chest");
        let random = 0;
        random = Math.floor(Math.random() * availablePositions.length);
        return availablePositions[random];
    }
    checkChestsStatus() {
        GameMaster_1.myGameMaster.allChestsOpen = this.chests.every((e) => e.isChestOpen === true);
    }
}
exports.myChestManager = new ChestManager();
