"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myHeroManager = void 0;
const GameMaster_1 = require("./GameMaster");
const Map_1 = require("./Map");
const Hero_1 = require("./Hero");
class HeroManager {
    constructor() {
        this.heroes = [];
        return this;
    }
    update(deltaSeconds) { }
    keyboardEvent(key) { }
    draw(delta, ctx) { }
    setHeroes() {
        for (let i = 0; i < GameMaster_1.myGameMaster.heroNumber; i += 1) {
            this.heroes.push(new Hero_1.Hero(this.heroStartOptions(), Map_1.myMap));
        }
    }
    heroStartOptions() {
        let availablePositions = [];
        availablePositions = Map_1.myMap.getRandomLocations("hero");
        let random = 0;
        random = Math.floor(Math.random() * availablePositions.length);
        return availablePositions[random];
    }
}
exports.myHeroManager = new HeroManager();
