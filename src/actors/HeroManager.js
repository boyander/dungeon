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
    console.log(myGameMaster.heroNumber);
    this.setHereo();
  }

  heroStartOptions() {
    let availablePositions = [];
    availablePositions = this.map.getRandomLocations("hero");
    let random = 0;
    random = Math.floor(Math.random() * availablePositions.length);
    return availablePositions[random];
  }

  setHereo(limit = 1) {
    // for (let i = 0; i <= limit; i === i + 1) {
    //   this.heroes.push(
    //     // position,ID,num,head,color
    //     new Hero(this.heroStartOptions(), this.map),
    //   );
    // }
    this.heroes.push(
      // position,ID,num,head,color
      new Hero(this.heroStartOptions(), this.map)
    );
  }
}
export const myHeroManager = new HeroManager();
