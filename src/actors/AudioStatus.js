import { myAudioManager } from "../effects/AudioManager";

export class AudioStatus {
  constructor(position) {
    this.position = position;
  }

  keyboardEvent() {

  }

  update() {

  }

  draw(delta, ctx) {
    // ctx.font = "15px Arial";
    // ctx.fillStyle = "white";
    // ctx.fillText(
    //   `Mute: ${myAudioManager.globalMute}`,
    //   this.position.x,
    //   this.position.y
    // );
  }
}
