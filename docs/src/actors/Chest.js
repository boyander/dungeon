"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chest = void 0;
const DrawManager_1 = require("../effects/DrawManager");
const GameMaster_1 = require("./GameMaster");
class Chest {
    constructor(position, value, num, isChestOpen) {
        this.position = { x: position.x, y: position.y };
        this.headerPosition = { x: 10, y: 10 };
        this.value = value;
        this.num = num;
        this.isChestOpen = isChestOpen;
    }
    draw(delta, ctx) {
        // if (myGameMaster.start) {}
        if (this.isChestOpen || GameMaster_1.myGameMaster.debug) {
            DrawManager_1.myDrawManager.getDrawElements(ctx, "openChest", this.position, delta);
            switch (this.value) {
                case "AA":
                    DrawManager_1.myDrawManager.getDrawElements(ctx, "rock", this.position, delta);
                    DrawManager_1.myDrawManager.getDrawHeaders(ctx, "rock", this.num);
                    break;
                case "BB":
                    DrawManager_1.myDrawManager.getDrawElements(ctx, "water", this.position, delta);
                    DrawManager_1.myDrawManager.getDrawHeaders(ctx, "water", this.num);
                    break;
                case "CC":
                    DrawManager_1.myDrawManager.getDrawElements(ctx, "fire", this.position, delta);
                    DrawManager_1.myDrawManager.getDrawHeaders(ctx, "fire", this.num);
                    break;
                default:
                    break;
            }
        }
        else {
            DrawManager_1.myDrawManager.getDrawElements(ctx, "closedChest", this.position);
        }
    }
}
exports.Chest = Chest;
