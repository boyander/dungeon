import { Chest } from "./Chest.js";
import { Map } from "./Map.js";
class ChestManager {
    constructor() {
        this.chests = [
            //position,ID,num,head,color
            new Chest(this.chest_start_options(), "AA", 375, "red", false),
            new Chest(this.chest_start_options(), "AA", 380, "red", false),
            new Chest(this.chest_start_options(), "BB", 410, "blue", false),
            new Chest(this.chest_start_options(), "BB", 415, "blue", false),
            new Chest(this.chest_start_options(), "CC", 445, "green", false),
            new Chest(this.chest_start_options(), "CC", 450, "green", false)
        ];
        this.latestOpenedChest = "";
        return this
    }
    update(deltaSeconds) {

    }
    keyboard_event(key) {

    }
    draw(delta, ctx) {

    }
    chest_start_options() {
        const map = new Map;
        let availablePositions = [];
        availablePositions = map.get_chests_start_options();
        let random = 0;
        random = Math.floor(Math.random() * availablePositions.length);
        return availablePositions[random]
    }
}
export const myChestManager = new ChestManager();