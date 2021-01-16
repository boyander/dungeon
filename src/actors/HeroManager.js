import { myGameMaster } from "./GameMaster";
import { Hero } from "./Hero";

class HeroManager {
  constructor() {
    this.heroes = [];
    return this;
  }

  update(deltaSeconds) {}

  keyboardEvent(key) {}

  draw(delta, ctx) {}

  setMap(map) {
    this.map = map;
    for (let i = 0; i < myGameMaster.heroNumber; i++) {
      this.setHereo();
    }
  }

  heroStartOptions() {
    let availablePositions = [];
    availablePositions = this.map.getRandomLocations("hero");
    let random = 0;
    random = Math.floor(Math.random() * availablePositions.length);
    return availablePositions[random];
  }

  setHereo() {
    this.heroes.push(
      // position,ID,num,head,color
      new Hero(this.heroStartOptions(), this.map),
    );
  }
}
export const myHeroManager = new HeroManager();
