import { myAudioManager } from "../effects/AudioManager.js";
export class AudioStatus {
  constructor(position) {
    this.position = position;
  }
  keyboard_event() {

}
update() {

}
draw(delta, ctx) {
    ctx.font = "15px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(
      `Mute: ${myAudioManager.globalMute}`,
      this.position.x,
      this.position.y
    );
}
}