class DrawManager {
  constructor() {
    this.spritesheet = new Image();
    this.spritesheet.src = require("../../public/images/dungeonStuffs4.png");

    this.render_torch_time = 0;
    this.render_torch_count = 0;
  }

  get_draw_elements(ctx, element, picture, position, i = 0, j = 0, tileSize = 0, delta = 0, frames = {}) {

    let sourcePos, sourceSize, destinationPos, destinationSize;
    // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);  

    switch (element) {
      case "chest":
        picture == "closedChest" ? sourcePos = { x: 240, y: 174 } : sourcePos = { x: 240, y: 208 };
        sourceSize = { x: 30, y: 18 };
        destinationPos = { x: (position.x - 12), y: (position.y - 18) };
        destinationSize = { x: 45, y: 30 };
        break;
      case "princess":
        picture == "rock" ? sourcePos = { x: 0, y: 208 } : (picture == "water" ? sourcePos = { x: 16, y: 208 } : sourcePos = { x: 32, y: 208 });
        sourceSize = { x: 19, y: 18 };
        destinationPos = { x: (position.x - 15), y: (position.y - 45) };
        destinationSize = { x: 40, y: 30 };
        break;
      case "map":
        picture == "wall" ? sourcePos = { x: 0, y: 16 } : sourcePos = { x: 64, y: 96 };
        sourceSize = { x: 20, y: 18 };
        destinationPos = { x: position.x + j * tileSize, y: position.y + i * tileSize }
        destinationSize = { x: 30, y: 30 }
        break;
      case "elem":
        this.render_torch_time += delta;
        this.render_torch_count = Math.floor(this.render_torch_time / 10);    
        if (this.render_torch_count > 6) { this.render_torch_time = 0; }
        sourcePos = { x: (frames[this.render_torch_count].x), y: (frames[this.render_torch_count].y) };
        sourceSize = { x: 45, y: 80 };
        destinationPos = { x: position.x + j * tileSize, y: position.y + i * tileSize }
        destinationSize = { x: 80, y: 90 }
        break;
      default:

        break
    }
    ctx.drawImage(this.spritesheet, sourcePos.x, sourcePos.y, sourceSize.x, sourceSize.y, destinationPos.x, destinationPos.y, destinationSize.x, destinationSize.y);
  }
  get_draw_headers(ctx, value, num) {

    let myPosition = 500;

    if (value == "AA") {
      if (num) {
        ctx.drawImage(this.spritesheet, 0, 191, 9, 19, myPosition, 13, 20, 40);
      } else {
        ctx.drawImage(this.spritesheet, 7, 191, 7, 19, myPosition + 17, 13, 20, 40);
      }

    } else if (value == "BB") {
      if (num) {
        ctx.drawImage(this.spritesheet, 15, 191, 9, 19, myPosition + 40, 13, 20, 40);
      } else {
        ctx.drawImage(this.spritesheet, 21, 191, 10, 19, myPosition + 60, 13, 20, 40);
      }

    } else {
      if (num) {
        ctx.drawImage(this.spritesheet, 31, 191, 10, 19, myPosition + 80, 13, 20, 40);
      } else {
        ctx.drawImage(this.spritesheet, 39, 191, 10, 19, myPosition + 100, 13, 20, 40);
      }
    }
  }
}
export const myDrawManager = new DrawManager();
