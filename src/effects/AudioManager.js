// export class GAMEAUDIO {
//   DANGEUN_SOUND;
//   CHEST_OPEN;
//   CHEST_CLOSED;
// }

// let AUDIO_EFFECTS = [
//   {
//     name: "DANGEUN_SOUND",
//     url: require("../../src/effects/ambience-creepyatmosfear.wav"),
//   },
//   {
//     name: "CHEST_OPEN",
//     url: require("../../src/effects/ambience-creepyatmosfear.wav"),
//   },
//   {
//     name: "CHEST_CLOSED",
//     url: require("../../src/effects/ambience-creepyatmosfear.wav"),
//   },
// ];

// interface AudioEffect {
//     name: GAMEAUDIO;
//     el: HTMLAudioElement;
// }

export class AudioManager {
  // effects: AudioEffect[];
  // globalMute: boolean;
  constructor() {
    this.globalMute = false;
    // Cargamos todos los archivos como objetos Audio
    // this.effects = AUDIO_EFFECTS.map((effect) => {
    //   let el = new Audio(effect.url);
    //   el.loop = true;
    //   el.volume = 0;
    //   el.autoplay = true
    //   return {
    //     name: effect.name,
    //     el,
    //   };
    // });
  }

//   play() {
//     var audioElement = new Audio();
//     audioElement.src = '../../src/effects/ambience-creepyatmosfear.wav'
//     console.log('src',audioElement.src); // ""
//     console.log('vol',audioElement.volume); // 1
//     audioElement.volume = 1;
//     audioElement.play().then(() => console.log(`Playing audio`)).catch((e) => console.log("Cannot start audio because browser protects it"));


//     // const effect = this.effects[0];
//     // effect.volume = 1;
//     // console.log(effect.volume)
//     // console.log(effect);
//     // effect.el.play().then(() => console.log(`Playing audio`)).catch((e) => console.log("Cannot start audio because browser protects it"));
//   }

//   // toggleMute() {    
//   //   this.globalMute = !this.globalMute;
//   //   if (this.globalMute) {
//   //     this.effects.forEach((eff) => {
//   //       eff.el.volume = 0;
//   //     });
//   //   }
//   // }

//   // play(audiotrack) {    

//   //   const effect = this.effects[0];
//   //   effect?.el
//   //     .play()
//   //     .then(() => console.log(`Playing audio`))
//   //     .catch((e) =>
//   //       console.log("Cannot start audio because browser protects it")
//   //     );
//   // }

//   // playMuted() {
//   //   for (let track of AUDIO_EFFECTS) {
//   //     this.play(track);
//   //     this.volume(track, 100);
//   //   }
//   // }

//   // volume(audiotrack, vol) {
//   //   // If mute is active do nothing;
//   //   if (this.globalMute) return;

//   //   // Else, set the volume of track
//   //   const effect = this.effects.find((eff) => eff.name == audiotrack);
//   //   if (effect) {
//   //     effect.volume = vol;
//   //   }
//   // }
}

export const myAudioManager = new AudioManager();
// // export const ga = new GAMEAUDIO();