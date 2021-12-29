import { myGameMaster } from "./GameMaster";
import { myMap } from "./Map";
import { Hero } from "./Hero";

class HeroManager {
  heroes: any
  constructor() {
    this.heroes = [];
    return this;
  }

  update(deltaSeconds: any) { }

  keyboardEvent(key: any) { }

  draw(delta: any, ctx: any) { }

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
