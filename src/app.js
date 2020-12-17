import { myChestManager } from './actors/ChestManager.js';
import { FPSViewer } from "./actors/FPSViewer.js";
import { Chronometer } from "./actors/Chronometer.js";
import { AudioStatus } from './actors/AudioStatus.js';
import { Skeleton } from "./actors/Skeleton.js";
import { Map } from "./actors/Map.js";
// import { am } from "../src/effects/AudioManager.js";


window.onload = () => {

    console.log("ready");

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // canvas.onclick = () => {
    //     // am.toggleMute();
    //     // am.play();
    //     var audioElement = new Audio();
    //     audioElement.src = '../../assets/audioeffects/ambience-creepyatmosfear.wav';
    //     audioElement.volume = 1;
    //     audioElement.play().then(() => console.log(`Playing audio`)).catch((e) => console.log("Cannot start audio because browser protects it"));
    // };

    // Actors
    let map = new Map();
    let initialPos = map.get_dungeon_start();

    let fps = new FPSViewer({ x: 5, y: 15 });
    let chrono = new Chronometer({ x: 100, y: 15 });
    let audio = new AudioStatus({ x: 200, y: 15 });
    let skeleton = new Skeleton(initialPos,map);      

    let actors = [map, fps, chrono, audio, skeleton, ...myChestManager.chests];

    // GAME LOOP -> BUCLE DE RENDERIZADO Y ACTUALIZACIÓN
    let lastFrame = 0;
    const render = (time) => {
        let delta = (time - lastFrame) / 1000;
        lastFrame = time;
        actors.forEach((actor) => actor.update(delta));
        ctx.clearRect(0, 0, 650, 720);
        actors.sort((a,b)=>{return a.position.y - b.position.y}).forEach((actor) => actor.draw(delta, ctx));
        window.requestAnimationFrame(render);
    };

    //setInterval(render, frameTime);
    window.requestAnimationFrame(render);

    // Eventos de teclado
    document.body.addEventListener("keydown", (e) => {
        actors.forEach((actor) => actor.keyboard_event(e.key));
    });
    document.body.addEventListener("keyup", (e) => {
        actors.forEach((actor) => {
            if (actor.keyboard_event_up) {
                actor.keyboard_event_up(e.key);
            }
        });
    });
};

