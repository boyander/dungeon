import { Hero } from "./Hero";

class HeroManager {
  constructor() {
    this.skeletonPosition = {};
    this.isSkeletonDead = false;
    return this;
  }

  update(deltaSeconds) { }

  keyboardEvent(key) { }

  draw(delta, ctx) { }

  setMap(map) {
    this.map = map;
    this.heroes = [
      // position,ID,num,head,color
      new Hero(this.heroStartOptions(), this.map),
      new Hero(this.heroStartOptions(), this.map),
      new Hero(this.heroStartOptions(), this.map),
      new Hero(this.heroStartOptions(), this.map),
    ];
  }

  heroStartOptions() {
    let availablePositions = [];
    availablePositions = this.map.getRandomLocations("hero");
    let random = 0;
    random = Math.floor(Math.random() * availablePositions.length);
    return availablePositions[random];
  }
}
export const myHeroManager = new HeroManager();
