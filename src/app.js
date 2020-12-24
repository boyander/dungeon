import { myChestManager } from "./actors/ChestManager.js";
import { myHeroManager } from "./actors/HeroManager.js";
import { FPSViewer } from "./actors/FPSViewer.js";
import { Chronometer } from "./actors/Chronometer.js";
import { AudioStatus } from "./actors/AudioStatus.js";
import { Skeleton } from "./actors/Skeleton.js";
import { Map } from "./actors/Map.js";
// import { am } from "../src/effects/AudioManager.js";

window.onload = () => {
  console.log("ready");

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Actors
  const map = new Map();
  myChestManager.set_map(map);
  const initialPos = map.get_dungeon_start();

  const fps = new FPSViewer({ x: 5, y: 15 });
  const chrono = new Chronometer({ x: 100, y: 15 });
  const audio = new AudioStatus({ x: 250, y: 15 });
  const skeleton = new Skeleton(initialPos, map);

  const actors = [
    map,
    fps,
    chrono,
    audio,
    skeleton,
    ...myChestManager.chests,
    ...myHeroManager.heroes,
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

  // setInterval(render, frameTime);
  window.requestAnimationFrame(render);

  // Eventos de teclado
  document.body.addEventListener("keydown", (e) => {
    actors.forEach(
      (actor) => actor.keyboard_event && actor.keyboard_event(e.key)
    );
  });
  document.body.addEventListener("keyup", (e) => {
    actors.forEach(
      (actor) => actor.keyboard_event_up && actor.keyboard_event_up(e.key)
    );
  });
};
