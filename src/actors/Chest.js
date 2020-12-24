import { myDrawManager } from "../effects/DrawManager";

export class Chest {
  constructor(position, value, num, isChestOpen) {
    this.position = { x: position.x, y: position.y };
    this.headerPosition = { x: 10, y: 10 };
    this.value = value;
    this.num = num;
    this.isChestOpen = isChestOpen;
  }

  draw(delta, ctx) {
    if (this.isChestOpen) {
      myDrawManager.get_draw_elements(ctx, "openChest", this.position, delta);
      switch (this.value) {
        case "AA":
          myDrawManager.get_draw_elements(ctx, "rock", this.position, delta);
          myDrawManager.get_draw_headers(ctx, "rock", this.num);
          break;
        case "BB":
          myDrawManager.get_draw_elements(ctx, "water", this.position, delta);
          myDrawManager.get_draw_headers(ctx, "water", this.num);
          break;
        case "CC":
          myDrawManager.get_draw_elements(ctx, "fire", this.position, delta);
          myDrawManager.get_draw_headers(ctx, "fire", this.num);

          break;
        default:
          break;
      }
    } else {
      myDrawManager.get_draw_elements(ctx, "closedChest", this.position);
    }
  }
}
