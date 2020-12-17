let dungeonMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W..S.........WW............W
W.WWWW.iWWWi.WW.iWWWi.WWWW.W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W.WWWW.WWWWW.ii.WWWWW.WWWW.W
W..........................W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
W.iWWi.WWWWi.WW.iWWWW.iWWi.W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W.WWWW.WW..........WW.WWWW.W
W.WWWW.WW.iWWWWWWi.WW.WWWW.W
W.iWWi.WW.W......W.WW.iWWi.W
W.........W......W.........W
W.WWWW.WW.W......W.WW.WWWW.W
W.WWWW.WW.WWi..iWW.WW.WWWW.W
W.WWWW.WW..........WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W............WW............W
W.iWWi.WWWWW.WW.WWWWW.iWWi.W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W...WW................WW...W
WWW.WW.WW.iWWWWWWi.WW.WW.WWW
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.iWWWWWWWWW.WW.WWWWWWWWWi.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
`;

export class Map {
  constructor(tileSize = 23) {
    this.spritesheet = new Image();
    this.spritesheet.src = require("../../public/images/dungeonStuffs4.png");

    this.spritesheet2 = new Image();
    this.spritesheet2.src = require("../../public/images/dungeonWalls2.png");

    this.position = { x: 0, y: 0 };

    this.tileSize = tileSize;
    let rows = dungeonMap.trim().split("\n");
    this.map = rows.map((row) => row.split(""));
    console.log("Map size", rows[0].length, this.map.length);

    this.time = 0;
    this.count = 0;
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

  get_chests_start_options() {
    let availablePositions = [];
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        if (this.map[i][j] == ".") {
          availablePositions.push({ x: this.position.x + this.tileSize * j + this.tileSize / 2, y: this.position.y + this.tileSize * i + this.tileSize / 2 })
        }
      }
    }
    return availablePositions;
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

  draw_torch(delta, ctx, i, j) {
    // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);  
    let frameSize1 = { x: 0, y: 16 };
    ctx.drawImage(
      this.spritesheet,
      frameSize1.x,
      frameSize1.y,
      20,
      18,
      this.position.x + j * this.tileSize,
      this.position.y + i * this.tileSize,
      30,
      30
    );

    this.time += delta;
    this.count = Math.floor(this.time/10);

    if (this.count > 6) {
      this.time = 0;
    }
    // this.framePos = Math.floor(this.time*8)
    // let frameSize2 = { x: 127+17, y: 150 };
    // if(this.framePos>2){
    //   this.framePos = 0;
    // }

    let frameSize3 = [
      { x: 129, y: 150 },
      { x: 145, y: 150 },
      {x: 161, y: 150},
      {x: 177, y: 150},
      {x: 193, y: 150},
      {x: 209, y: 150},
      {x: 225, y: 150},
      {x: 241, y: 150},
    ];

    // console.log(frameSize3[this.count])

    // let frameSize2 = { x: 127 + 17, y: 150 };
    let frameSize2 = frameSize3[this.count];

    ctx.drawImage(
      this.spritesheet,
      frameSize2.x,
      frameSize2.y,
      45,
      80,
      this.position.x + j * this.tileSize,
      this.position.y + i * this.tileSize,
      80,
      90
    );


    // console.log(Math.floor(this.time * 8))

  }

  // draw_door(ctx, i, j){
  //   let frameSize = { x: 80, y: 80 };
  //   ctx.drawImage(
  //     this.spritesheet2,
  //     frameSize.x,
  //     frameSize.y,
  //     20,
  //     18,
  //     this.position.x + j * this.tileSize,
  //     this.position.y + i * this.tileSize,
  //     30,
  //     30
  //   );
  // }

  keyboard_event() { }
  update() { }

  draw(delta, ctx) {

    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[i].length; j++) {
        let cell = this.map[i][j];
        if (cell == "W") this.draw_wall(ctx, i, j);
        if (cell == "i") this.draw_torch(delta, ctx, i, j);
        if (cell == "." || cell == "S") this.draw_floor(ctx, i, j);
        // if (cell == "O") this.draw_door(ctx, i, j);
        // if (cell == "*") this.draw_dot(ctx, i, j, "super");
      }
    }
  }
}