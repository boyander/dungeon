import { myDrawManager } from '../effects/DrawManager';
export class Chest {
    constructor(position, value, num, isChestOpen) {
        this.position = { x: position.x, y: position.y };
        this.value = value;
        this.num = num;
        this.isChestOpen = isChestOpen;
    }

    update(deltaSeconds) {

    }

    keyboard_event(key) {

    }

    draw(delta, ctx) {

        if (this.isChestOpen) {
            myDrawManager.get_draw_elements(ctx, "chest","openChest", this.position);
            switch (this.value) {
                case "AA":
                    myDrawManager.get_draw_elements(ctx, "princess","rock", this.position);
                    myDrawManager.get_draw_headers(ctx,"AA",this.num);
                    break;
                case "BB":
                    myDrawManager.get_draw_elements(ctx, "princess","water", this.position);
                    myDrawManager.get_draw_headers(ctx,"BB",this.num);
                    break;
                case "CC":
                    myDrawManager.get_draw_elements(ctx, "princess","fire", this.position);
                    myDrawManager.get_draw_headers(ctx,"CC",this.num);
                    break;
                default:
                    break;
            };

        } else {
            myDrawManager.get_draw_elements(ctx, "chest","closedChest", this.position);
        }
    }
}