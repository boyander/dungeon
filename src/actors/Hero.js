// import { km } from './ChestManager';
// export class Hero {
//     framePos = 0;
//     time = 0;
//     constructor(initialPos) {
//         this.origin = { x: initialPos.x, y: initialPos.y };

//         this.spritesheet = new Image();
//         this.spritesheet.src = require("../../dungeon/public/images/link.png");
//         this.sequences = [
//             { name: "still-down", numFrames: 1, ySeqPos: 0 },
//             { name: "still-left", numFrames: 1, ySeqPos: 1 },
//             { name: "still-up", numFrames: 1, ySeqPos: 2 },
//             { name: "still-right", numFrames: 1, ySeqPos: 3 },
//             { name: "moving-down", numFrames: 10, ySeqPos: 4 },
//             { name: "moving-left", numFrames: 10, ySeqPos: 5 },
//             { name: "moving-up", numFrames: 10, ySeqPos: 6 },
//             { name: "moving-right", numFrames: 10, ySeqPos: 7 },
//         ];
//         this.currentSequence = "down";
//         this.speed = { x: 0, y: 0 };
//     }

//     draw(delta, ctx) {

//         const frameSize = { x: 120, y: 130 };
//         const seqName =
//             this.speed.x == 0 && this.speed.y == 0
//                 ? `still-${this.currentSequence}`
//                 : `moving-${this.currentSequence}`;
//         const seq = this.sequences.find((s) => s.name == seqName);
//         if (!seq) throw new Error("invalid seq");

//         ctx.drawImage(
//             this.spritesheet,
//             frameSize.x * this.framePos,
//             frameSize.y * seq.ySeqPos,
//             frameSize.x,
//             frameSize.y,
//             this.origin.x,
//             this.origin.y,
//             frameSize.x-90,
//             frameSize.y-90
//         );
//         this.time += delta;
//         this.framePos = Math.floor(this.time * 10) % seq.numFrames;

        
//     }

//     update(deltaSeconds) {

//         let newPosX = (this.origin.x + this.speed.x);
//         let newPosY = (this.origin.y + this.speed.y);

//         if (
//             // Left & right screen limits
//             newPosX < 480 &&
//             newPosX > 0 &&
//             // Up and down screen limits
//             newPosY < 475 &&
//             newPosY > 0
//         ) {
//             this.origin.x = newPosX;
//             this.origin.y = newPosY;
//         }
//     }

//     keyboard_event(key) {
//         switch (key) {
//             case "ArrowLeft":
//                 this.currentSequence = "left";
//                 this.speed.x = -5;
//                 // this.origin.x = this.origin.x - this.speed;
//                 break;
//             case "ArrowRight":
//                 this.currentSequence = "right";
//                 this.speed.x = 5;
//                 //this.origin.x = this.origin.x + this.speed;
//                 break;
//             case "ArrowUp":
//                 this.currentSequence = "up";
//                 this.speed.y = -5;
//                 // this.origin.y = this.origin.y - this.speed;
//                 break;
//             case "ArrowDown":
//                 this.currentSequence = "down";
//                 this.speed.y = 5;
//                 // this.origin.y = this.origin.y + this.speed;
//                 break;
//             case "a":
//                 this.open();
//                 break;
//         }
//     }

//     keyboard_event_up(key) {
//         this.speed.x = 0;
//         this.speed.y = 0;
//       }

//     open() {
//         let distance = 0;
//         console.log("hola");
//         km.keys.forEach((ori) => {
//             distance = 0;
//             distance = Math.sqrt(Math.pow(this.origin.x - ori.position.x, 2) + Math.pow(this.origin.y - ori.position.y, 2));

//             if (distance < 30 && !ori.isChestOpen) {

//                 switch (km.lastKey) {
//                     case "":
//                         ori.isChestOpen = true;
//                         km.lastKey = ori.id;
//                         break
//                     case ori.id:
//                         ori.isChestOpen = true;
//                         km.lastKey = "";
//                         break
//                     default:
//                         km.keys.forEach(e => e.isChestOpen = false);
//                         km.lastKey = "";
//                         ori.isChestOpen = true;
//                         km.lastKey = ori.id;
//                         break
//                 }
//             }
//         });
//     }
// }