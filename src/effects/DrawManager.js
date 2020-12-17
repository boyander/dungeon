class DrawManager {
  constructor() {

    this.spritesheet = new Image();
    this.spritesheet.src = require("../../public/images/dungeonStuffs3.png");
  }

  get_draw(ctx, picture, position, helper = true) {

    let sourcePos, sourceSize, destinationPos, destinationSize;
    // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);  

    switch (picture) {
      case "closedChest":
        sourcePos = { x: 240, y: 174 };
        sourceSize = { x: 30, y: 18 };
        destinationPos = { x: (position.x - 12), y: (position.y - 18) };
        destinationSize = { x: 45, y: 30 };

        break
      case "openChest":

        sourcePos = { x: 240, y: 208 };
        sourceSize = { x: 30, y: 18 };
        destinationPos = { x: (position.x - 12), y: (position.y - 18) };
        destinationSize = { x: 45, y: 30 };
        break
      default:

        break
    }

    ctx.drawImage(this.spritesheet, sourcePos.x, sourcePos.y, sourceSize.x, sourceSize.y, destinationPos.x, destinationPos.y, destinationSize.x, destinationSize.y);

    if (helper) {
      ctx.beginPath();
      ctx.arc(position.x, position.y, 3, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }

  }
}
export const myDrawManager = new DrawManager();
