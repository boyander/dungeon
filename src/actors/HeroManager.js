import { Hero } from "./Hero";
import { Map } from "./Map";

class HeroManager {
  constructor() {
    this.heroes = [
    // position,ID,num,head,color
      new Hero(this.heroStartOptions(), new Map()),
      new Hero(this.heroStartOptions(), new Map()),
      new Hero(this.heroStartOptions(), new Map()),
      new Hero(this.heroStartOptions(), new Map()),
    ];
    return this;
  }

update(deltaSeconds) { }

keyboardEvent(key) { }

draw(delta, ctx) { }

heroStartOptions() {
    const map = new Map();
    let availablePositions = [];
    availablePositions = map.getRandomLocations();
    let random = 0;
    random = Math.floor(Math.random() * availablePositions.length);
    return availablePositions[random];
  }
}
export const myHeroManager = new HeroManager();
