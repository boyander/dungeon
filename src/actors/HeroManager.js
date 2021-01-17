/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { myGameMaster } from "./GameMaster";
import { myMap } from "./Map";
import { Hero } from "./Hero";

class HeroManager {
  constructor() {
    this.heroes = [];
    return this;
  }

  update(deltaSeconds) {}

  keyboardEvent(key) {}

  draw(delta, ctx) {}

  setHeroes() {
    for (let i = 0; i < myGameMaster.heroNumber; i += 1) {
      this.heroes.push(new Hero(this.heroStartOptions(), myMap));
    }
  }

  heroStartOptions() {
    let availablePositions = [];
    availablePositions = myMap.getRandomLocations("hero");
    let random = 0;
    random = Math.floor(Math.random() * availablePositions.length);
    return availablePositions[random];
  }
}
export const myHeroManager = new HeroManager();
