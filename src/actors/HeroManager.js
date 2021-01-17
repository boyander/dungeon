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

  setMap() {
    for (let i = 0; i < myGameMaster.heroNumber; i += 1) {
      this.setHereo();
    }
  }

  heroStartOptions() {
    let availablePositions = [];
    availablePositions = myMap.getRandomLocations("hero");
    let random = 0;
    random = Math.floor(Math.random() * availablePositions.length);
    return availablePositions[random];
  }

  setHereo() {
    this.heroes.push(
      // position,ID,num,head,color
      new Hero(this.heroStartOptions(), myMap)
    );
  }
}
export const myHeroManager = new HeroManager();
