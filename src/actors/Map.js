let dungeonMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W..S.........WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W..........................W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W.WWWW.WW..........WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.W......W.WW.WWWW.W
W.........W......W.........W
W.WWWW.WW.W......W.WW.WWWW.W
W.WWWW.WW.WWW..WWW.WW.WWWW.W
W.WWWW.WW..........WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W...WW................WW...W
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
`;

export class Map {
  constructor(tileSize = 23) {
    this.spritesheet = new Image();
    this.spritesheet.src = require("../../public/images/dungeonStuffs3.png");

    this.position = { x: 0, y: 0 };

    this.tileSize = tileSize;
    let rows = dungeonMap.trim().split("\n");
    this.map = rows.map((row) => row.split(""));
    console.log("Map size", rows[0].length, this.map.length);

  }

  get_dungeon_start() {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (this.map[i][j] == "S") {
          return {
            x: this.position.x + this.tileSize * j + this.tileSize / 2,
            y: this.position.y + this.tileSize * i + this.tileSize / 2,
          };
        }
      }
    }
    throw new Error("Set the S for pacman start");
  }

  pos_to_tile(position) {
    let i = Math.floor((position.x - this.position.x) / this.tileSize);
    let j = Math.floor((position.y - this.position.y) / this.tileSize);
    return [j, i];
  }

  tile_at_index(tileIndex) {
    try {
      let tile = this.map[tileIndex[0]][tileIndex[1]];
      return tile;
    } catch (error) {
      console.log("out of bounds");
      return false;
    }
  }

  tile(position, direction) {
    let tileIndex = this.pos_to_tile(position);
    let facing = [tileIndex[0] + direction[1], tileIndex[1] + direction[0]];
    let tile = this.tile_at_index(facing);
    return tile;
  }

  draw_wall(ctx, i, j) {
    let frameSize = { x: 0, y: 16 };
    ctx.drawImage(
      this.spritesheet,
      frameSize.x,
      frameSize.y,
      20,
      18,
      this.position.x + j * this.tileSize,
      this.position.y + i * this.tileSize,
      30,
      30
    );
  }

  draw_floor(ctx, i, j) {
    let frameSize = { x: 64, y: 96 };
    ctx.drawImage(
      this.spritesheet,
      frameSize.x,
      frameSize.y,
      20,
      18,
      this.position.x + j * this.tileSize,
      this.position.y + i * this.tileSize,
      30,
      30
    );
  }

  // draw_dot(ctx, i, j, type = "normal") {
  //   ctx.strokeStyle = "black";
  //   ctx.fillStyle = type == "normal" ? "yellow" : "red";
  //   ctx.lineWidth = 0.5;
  //   ctx.beginPath();
  //   ctx.arc(
  //     this.position.x + j * this.tileSize + this.tileSize / 2,
  //     this.position.y + i * this.tileSize + this.tileSize / 2,
  //     type == "normal" ? this.tileSize / 6 : this.tileSize / 4,
  //     0,
  //     2 * Math.PI
  //   );
  //   ctx.fill();
  //   ctx.stroke();
  //   ctx.closePath();
  // }


  keyboard_event() {

  }
  update() {

  }

  draw(delta, ctx) {

    // let frameSize = { x: 64, y: 55 };
    // ctx.drawImage(
    //   this.spritesheet,
    //   0,
    //   89,
    //   frameSize.x,
    //   frameSize.y,
    //   this.position.x,
    //   this.position.y,
    //   500,
    //   500
    // );

    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        let cell = this.map[i][j];
        if (cell == "W") this.draw_wall(ctx, i, j);
        if (cell == "." || cell == "S") this.draw_floor(ctx, i, j);
        // if (cell == "*") this.draw_dot(ctx, i, j, "super");
      }
    }

  }
}
