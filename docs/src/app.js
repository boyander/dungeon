"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChestManager_1 = require("./actors/ChestManager");
const HeroManager_1 = require("./actors/HeroManager");
const Map_1 = require("./actors/Map");
// import { myGameMaster } from "./actors/GameMaster";
const Skeleton_1 = require("./actors/Skeleton");
const FPSViewer_1 = require("./actors/FPSViewer");
const Chronometer_1 = require("./actors/Chronometer");
const UpperMessage_1 = require("./actors/UpperMessage");
// import { AudioStatus } from "./actors/AudioStatus";
// import { am } from "../src/effects/AudioManager.js";
window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    // Actors
    const map = Map_1.myMap;
    HeroManager_1.myHeroManager.setHeroes();
    const initialPos = map.GetDungeonStart();
    const fps = new FPSViewer_1.FPSViewer({ x: 5, y: 15 });
    const chrono = new Chronometer_1.Chronometer({ x: 100, y: 15 });
    const upperMessage = new UpperMessage_1.UpperMessage({ x: 100, y: 15 });
    // const audio = new AudioStatus({ x: 250, y: 15 });
    const skeleton = new Skeleton_1.Skeleton(initialPos, map);
    const actors = [
        map,
        fps,
        chrono,
        upperMessage,
        // audio,
        skeleton,
        ...ChestManager_1.myChestManager.chests,
        ...HeroManager_1.myHeroManager.heroes,
    ];
    // GAME LOOP -> BUCLE DE RENDERIZADO Y ACTUALIZACIÓN
    let lastFrame = 0;
    const render = (time) => {
        const delta = (time - lastFrame) / 1000;
        lastFrame = time;
        actors.forEach((actor) => actor.update && actor.update(delta));
        ctx.clearRect(0, 0, 650, 720);
        actors
            .sort((a, b) => a.position.y - b.position.y)
            .forEach((actor) => actor.draw(delta, ctx));
        window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);
    document.body.addEventListener("keydown", (e) => {
        actors.forEach((actor) => actor.keyboardEvent && actor.keyboardEvent(e.key));
    });
    document.body.addEventListener("keyup", (e) => {
        actors.forEach((actor) => actor.keyboardEventUp && actor.keyboardEventUp(e.key));
    });
};
