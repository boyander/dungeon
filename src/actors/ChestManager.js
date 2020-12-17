import { Chest } from "./Chest.js";
class ChestManager {
    constructor() {
        this.chests = [
            //position,ID,num,head,color
            new Chest ({x:0,y:0},"AA",0,375,"red"),
            new Chest ({x:0,y:0},"AA",1,380,"red"),
            new Chest ({x:0,y:0},"BB",2,410,"blue"),
            new Chest ({x:0,y:0},"BB",3,415,"blue"),
            new Chest ({x:0,y:0},"CC",4,445,"green"),
            new Chest ({x:0,y:0},"CC",5,450,"green")
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
}
export const myChestManager = new ChestManager();