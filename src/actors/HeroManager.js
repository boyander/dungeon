import { Hero } from "./Hero.js";
import { Map } from "./Map.js";
class HeroManager {

    constructor() {
        this.heroes = [
            //position,ID,num,head,color
            new Hero(this.hero_start_options(), new Map()),
            new Hero(this.hero_start_options(), new Map()),
            new Hero(this.hero_start_options(), new Map()),
            new Hero(this.hero_start_options(), new Map()),
        ];
        return this
    }
    update(deltaSeconds) {

    }
    keyboard_event(key) {

    }
    draw(delta, ctx) {

    }
    hero_start_options() {
        const map = new Map;
        let availablePositions = [];
        availablePositions = map.get_random_locations();
        let random = 0;
        random = Math.floor(Math.random() * availablePositions.length);
        return availablePositions[random]
    }
}
export const myHeroManager = new HeroManager();