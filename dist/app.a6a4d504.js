// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"public/images/dungeonStuffs4.png":[function(require,module,exports) {
module.exports = "/dungeonStuffs4.748713d4.png";
},{}],"src/effects/DrawManager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myDrawManager = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DrawManager = /*#__PURE__*/function () {
  function DrawManager() {
    _classCallCheck(this, DrawManager);

    this.spritesheet = new Image();
    this.spritesheet.src = require("../../public/images/dungeonStuffs4.png");
  }

  _createClass(DrawManager, [{
    key: "get_draw_elements",
    value: function get_draw_elements(ctx, element, picture, position) {
      var sourcePos, sourceSize, destinationPos, destinationSize; // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);  

      switch (element) {
        case "chest":
          picture == "closedChest" ? sourcePos = {
            x: 240,
            y: 174
          } : sourcePos = {
            x: 240,
            y: 208
          };
          sourceSize = {
            x: 30,
            y: 18
          };
          destinationPos = {
            x: position.x - 12,
            y: position.y - 18
          };
          destinationSize = {
            x: 45,
            y: 30
          };
          break;

        case "princess":
          picture == "rock" ? sourcePos = {
            x: 0,
            y: 208
          } : picture == "water" ? sourcePos = {
            x: 16,
            y: 208
          } : sourcePos = {
            x: 32,
            y: 208
          };
          sourceSize = {
            x: 19,
            y: 18
          };
          destinationPos = {
            x: position.x - 15,
            y: position.y - 45
          };
          destinationSize = {
            x: 40,
            y: 30
          };
          break;

        default:
          break;
      }

      ctx.drawImage(this.spritesheet, sourcePos.x, sourcePos.y, sourceSize.x, sourceSize.y, destinationPos.x, destinationPos.y, destinationSize.x, destinationSize.y);
    }
  }, {
    key: "get_draw_headers",
    value: function get_draw_headers(ctx, value, num) {
      var myPosition = 500;

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
  }]);

  return DrawManager;
}();

var myDrawManager = new DrawManager();
exports.myDrawManager = myDrawManager;
},{"../../public/images/dungeonStuffs4.png":"public/images/dungeonStuffs4.png"}],"src/actors/Chest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chest = void 0;

var _DrawManager = require("../effects/DrawManager");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chest = /*#__PURE__*/function () {
  function Chest(position, value, num, isChestOpen) {
    _classCallCheck(this, Chest);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.value = value;
    this.num = num;
    this.isChestOpen = isChestOpen;
  }

  _createClass(Chest, [{
    key: "update",
    value: function update(deltaSeconds) {}
  }, {
    key: "keyboard_event",
    value: function keyboard_event(key) {}
  }, {
    key: "draw",
    value: function draw(delta, ctx) {
      if (this.isChestOpen) {
        _DrawManager.myDrawManager.get_draw_elements(ctx, "chest", "openChest", this.position);

        switch (this.value) {
          case "AA":
            _DrawManager.myDrawManager.get_draw_elements(ctx, "princess", "rock", this.position);

            _DrawManager.myDrawManager.get_draw_headers(ctx, "AA", this.num);

            break;

          case "BB":
            _DrawManager.myDrawManager.get_draw_elements(ctx, "princess", "water", this.position);

            _DrawManager.myDrawManager.get_draw_headers(ctx, "BB", this.num);

            break;

          case "CC":
            _DrawManager.myDrawManager.get_draw_elements(ctx, "princess", "fire", this.position);

            _DrawManager.myDrawManager.get_draw_headers(ctx, "CC", this.num);

            break;

          default:
            break;
        }

        ;
      } else {
        _DrawManager.myDrawManager.get_draw_elements(ctx, "chest", "closedChest", this.position);
      }
    }
  }]);

  return Chest;
}();

exports.Chest = Chest;
},{"../effects/DrawManager":"src/effects/DrawManager.js"}],"public/images/dungeonWalls2.png":[function(require,module,exports) {
module.exports = "/dungeonWalls2.bd66cb29.png";
},{}],"src/actors/Map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dungeonMap = "\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nW..S.........WW............W\nW.WWWW.iWWWi.WW.iWWWi.WWWW.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW.WWWW.WWWWW.ii.WWWWW.WWWW.W\nW..........................W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW......WW....WW....WW......W\nW.iWWi.WWWWi.WW.iWWWW.iWWi.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW.WWWW.WW..........WW.WWWW.W\nW.WWWW.WW.iWWWWWWi.WW.WWWW.W\nW.iWWi.WW.W......W.WW.iWWi.W\nW.........W......W.........W\nW.WWWW.WW.W......W.WW.WWWW.W\nW.WWWW.WW.WWi..iWW.WW.WWWW.W\nW.WWWW.WW..........WW.WWWW.W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW............WW............W\nW.iWWi.WWWWW.WW.WWWWW.iWWi.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW...WW................WW...W\nWWW.WW.WW.iWWWWWWi.WW.WW.WWW\nWWW.WW.WW.WWWWWWWW.WW.WW.WWW\nW......WW....WW....WW......W\nW.iWWWWWWWWW.WW.WWWWWWWWWi.W\nW.WWWWWWWWWW.WW.WWWWWWWWWW.W\nW..........................W\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n";

var Map = /*#__PURE__*/function () {
  function Map() {
    var tileSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 23;

    _classCallCheck(this, Map);

    this.spritesheet = new Image();
    this.spritesheet.src = require("../../public/images/dungeonStuffs4.png");
    this.spritesheet2 = new Image();
    this.spritesheet2.src = require("../../public/images/dungeonWalls2.png");
    this.position = {
      x: 0,
      y: 0
    };
    this.tileSize = tileSize;
    var rows = dungeonMap.trim().split("\n");
    this.map = rows.map(function (row) {
      return row.split("");
    });
    console.log("Map size", rows[0].length, this.map.length);
    this.time = 0;
    this.count = 0;
  }

  _createClass(Map, [{
    key: "get_dungeon_start",
    value: function get_dungeon_start() {
      for (var i = 0; i < this.map.length; i++) {
        for (var j = 0; j < this.map[i].length; j++) {
          if (this.map[i][j] == "S") {
            return {
              x: this.position.x + this.tileSize * j + this.tileSize / 2,
              y: this.position.y + this.tileSize * i + this.tileSize / 2
            };
          }
        }
      }

      throw new Error("Set the S for pacman start");
    }
  }, {
    key: "get_chests_start_options",
    value: function get_chests_start_options() {
      var availablePositions = [];

      for (var i = 0; i < this.map.length; i++) {
        for (var j = 0; j < this.map[i].length; j++) {
          if (this.map[i][j] == ".") {
            availablePositions.push({
              x: this.position.x + this.tileSize * j + this.tileSize / 2,
              y: this.position.y + this.tileSize * i + this.tileSize / 2
            });
          }
        }
      }

      return availablePositions;
    }
  }, {
    key: "pos_to_tile",
    value: function pos_to_tile(position) {
      var i = Math.floor((position.x - this.position.x) / this.tileSize);
      var j = Math.floor((position.y - this.position.y) / this.tileSize);
      return [j, i];
    }
  }, {
    key: "tile_at_index",
    value: function tile_at_index(tileIndex) {
      try {
        var tile = this.map[tileIndex[0]][tileIndex[1]];
        return tile;
      } catch (error) {
        console.log("out of bounds");
        return false;
      }
    }
  }, {
    key: "tile",
    value: function tile(position, direction) {
      var tileIndex = this.pos_to_tile(position);
      var facing = [tileIndex[0] + direction[1], tileIndex[1] + direction[0]];
      var tile = this.tile_at_index(facing);
      return tile;
    }
  }, {
    key: "draw_wall",
    value: function draw_wall(ctx, i, j) {
      var frameSize = {
        x: 0,
        y: 16
      };
      ctx.drawImage(this.spritesheet, frameSize.x, frameSize.y, 20, 18, this.position.x + j * this.tileSize, this.position.y + i * this.tileSize, 30, 30);
    }
  }, {
    key: "draw_floor",
    value: function draw_floor(ctx, i, j) {
      var frameSize = {
        x: 64,
        y: 96
      };
      ctx.drawImage(this.spritesheet, frameSize.x, frameSize.y, 20, 18, this.position.x + j * this.tileSize, this.position.y + i * this.tileSize, 30, 30);
    }
  }, {
    key: "draw_torch",
    value: function draw_torch(delta, ctx, i, j) {
      // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);  
      var frameSize1 = {
        x: 0,
        y: 16
      };
      ctx.drawImage(this.spritesheet, frameSize1.x, frameSize1.y, 20, 18, this.position.x + j * this.tileSize, this.position.y + i * this.tileSize, 30, 30);
      this.time += delta;
      this.count = Math.floor(this.time / 10);

      if (this.count > 6) {
        this.time = 0;
      } // this.framePos = Math.floor(this.time*8)
      // let frameSize2 = { x: 127+17, y: 150 };
      // if(this.framePos>2){
      //   this.framePos = 0;
      // }


      var frameSize3 = [{
        x: 129,
        y: 150
      }, {
        x: 145,
        y: 150
      }, {
        x: 161,
        y: 150
      }, {
        x: 177,
        y: 150
      }, {
        x: 193,
        y: 150
      }, {
        x: 209,
        y: 150
      }, {
        x: 225,
        y: 150
      }, {
        x: 241,
        y: 150
      }]; // console.log(frameSize3[this.count])
      // let frameSize2 = { x: 127 + 17, y: 150 };

      var frameSize2 = frameSize3[this.count];
      ctx.drawImage(this.spritesheet, frameSize2.x, frameSize2.y, 45, 80, this.position.x + j * this.tileSize, this.position.y + i * this.tileSize, 80, 90); // console.log(Math.floor(this.time * 8))
    } // draw_door(ctx, i, j){
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

  }, {
    key: "keyboard_event",
    value: function keyboard_event() {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "draw",
    value: function draw(delta, ctx) {
      for (var i = 0; i < this.map.length; i++) {
        for (var j = 0; j < this.map[i].length; j++) {
          var cell = this.map[i][j];
          if (cell == "W") this.draw_wall(ctx, i, j);
          if (cell == "i") this.draw_torch(delta, ctx, i, j);
          if (cell == "." || cell == "S") this.draw_floor(ctx, i, j); // if (cell == "O") this.draw_door(ctx, i, j);
          // if (cell == "*") this.draw_dot(ctx, i, j, "super");
        }
      }
    }
  }]);

  return Map;
}();

exports.Map = Map;
},{"../../public/images/dungeonStuffs4.png":"public/images/dungeonStuffs4.png","../../public/images/dungeonWalls2.png":"public/images/dungeonWalls2.png"}],"src/actors/ChestManager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myChestManager = void 0;

var _Chest = require("./Chest.js");

var _Map = require("./Map.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChestManager = /*#__PURE__*/function () {
  function ChestManager() {
    _classCallCheck(this, ChestManager);

    this.chests = [//position,ID,num,head,color
    new _Chest.Chest(this.chest_start_options(), "AA", 0, false), new _Chest.Chest(this.chest_start_options(), "AA", 1, false), new _Chest.Chest(this.chest_start_options(), "BB", 0, false), new _Chest.Chest(this.chest_start_options(), "BB", 1, false), new _Chest.Chest(this.chest_start_options(), "CC", 0, false), new _Chest.Chest(this.chest_start_options(), "CC", 1, false)];
    this.latestOpenedChest = "";
    return this;
  }

  _createClass(ChestManager, [{
    key: "update",
    value: function update(deltaSeconds) {}
  }, {
    key: "keyboard_event",
    value: function keyboard_event(key) {}
  }, {
    key: "draw",
    value: function draw(delta, ctx) {}
  }, {
    key: "chest_start_options",
    value: function chest_start_options() {
      var map = new _Map.Map();
      var availablePositions = [];
      availablePositions = map.get_chests_start_options();
      var random = 0;
      random = Math.floor(Math.random() * availablePositions.length);
      return availablePositions[random];
    }
  }]);

  return ChestManager;
}();

var myChestManager = new ChestManager();
exports.myChestManager = myChestManager;
},{"./Chest.js":"src/actors/Chest.js","./Map.js":"src/actors/Map.js"}],"src/actors/FPSViewer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FPSViewer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FPSViewer = /*#__PURE__*/function () {
  function FPSViewer(position) {
    _classCallCheck(this, FPSViewer);

    this.position = position;
  }

  _createClass(FPSViewer, [{
    key: "keyboard_event",
    value: function keyboard_event() {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "draw",
    value: function draw(delta, ctx) {
      var fps = (1 / delta).toFixed(2);
      ctx.font = "15px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("FPS: ".concat(fps), this.position.x, this.position.y);
    }
  }]);

  return FPSViewer;
}();

exports.FPSViewer = FPSViewer;
},{}],"src/actors/Chronometer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chronometer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chronometer = /*#__PURE__*/function () {
  function Chronometer(position) {
    _classCallCheck(this, Chronometer);

    this.position = position;
    this.seg = 0;
    this.min = 0;
  }

  _createClass(Chronometer, [{
    key: "keyboard_event",
    value: function keyboard_event() {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "draw",
    value: function draw(delta, ctx) {
      this.seg += delta;
      var seg = Math.floor(this.seg);
      var currentTimer = "Time: ".concat(this.min, ":").concat(seg, " segundos");

      if (seg == 60) {
        this.min++;
        this.seg = 0;
      }

      ctx.font = "15px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("".concat(currentTimer), this.position.x, this.position.y);
    }
  }]);

  return Chronometer;
}();

exports.Chronometer = Chronometer;
},{}],"src/effects/AudioManager.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myAudioManager = exports.AudioManager = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var AudioManager = // effects: AudioEffect[];
// globalMute: boolean;
function AudioManager() {
  _classCallCheck(this, AudioManager);

  this.globalMute = false; // Cargamos todos los archivos como objetos Audio
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
} //   play() {
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
;

exports.AudioManager = AudioManager;
var myAudioManager = new AudioManager(); // // export const ga = new GAMEAUDIO();

exports.myAudioManager = myAudioManager;
},{}],"src/actors/AudioStatus.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioStatus = void 0;

var _AudioManager = require("../effects/AudioManager.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AudioStatus = /*#__PURE__*/function () {
  function AudioStatus(position) {
    _classCallCheck(this, AudioStatus);

    this.position = position;
  }

  _createClass(AudioStatus, [{
    key: "keyboard_event",
    value: function keyboard_event() {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "draw",
    value: function draw(delta, ctx) {
      ctx.font = "15px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("Mute: ".concat(_AudioManager.myAudioManager.globalMute), this.position.x, this.position.y);
    }
  }]);

  return AudioStatus;
}();

exports.AudioStatus = AudioStatus;
},{"../effects/AudioManager.js":"src/effects/AudioManager.js"}],"public/images/skeleton.png":[function(require,module,exports) {
module.exports = "/skeleton.882af189.png";
},{}],"src/actors/Skeleton.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skeleton = void 0;

var _ChestManager = require("./ChestManager.js");

var _DrawManager = require("../effects/DrawManager");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { am } from "../effects/AudioManager.js";
var Skeleton = /*#__PURE__*/function () {
  function Skeleton(position, map) {
    _classCallCheck(this, Skeleton);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.skeletonSize = 10;
    this.spritesheet = new Image();
    this.spritesheet.src = require("../../public/images/skeleton.png"); // this.spritesheet1 = new Image();
    // this.spritesheet1.src = require("../../dungeon/public/images/index.jpeg");

    this.sequences = [{
      name: "still-down",
      numFrames: 2,
      ySeqPos: 2
    }, {
      name: "still-left",
      numFrames: 2,
      ySeqPos: 1
    }, {
      name: "still-up",
      numFrames: 2,
      ySeqPos: 0
    }, {
      name: "still-right",
      numFrames: 2,
      ySeqPos: 3
    }, {
      name: "moving-down",
      numFrames: 7,
      ySeqPos: 10
    }, {
      name: "moving-left",
      numFrames: 7,
      ySeqPos: 9
    }, {
      name: "moving-up",
      numFrames: 7,
      ySeqPos: 8
    }, {
      name: "moving-right",
      numFrames: 7,
      ySeqPos: 11
    }];
    this.framePos = 0;
    this.time = 0;
    this.currentSequence = "down";
    this.speed = {
      x: 0,
      y: 0
    };
    this.map = map;
  }

  _createClass(Skeleton, [{
    key: "draw",
    value: function draw(delta, ctx) {
      var frameSize = {
        x: 64,
        y: 64
      };
      var seqName = this.speed.x == 0 && this.speed.y == 0 ? "still-".concat(this.currentSequence) : "moving-".concat(this.currentSequence);
      var seq = this.sequences.find(function (s) {
        return s.name == seqName;
      });
      if (!seq) throw new Error("invalid seq"); // myDrawManager.get_draw_skeleton(ctx, "skeleton", "", this.position);

      ctx.drawImage(this.spritesheet, frameSize.x * this.framePos, frameSize.y * seq.ySeqPos, frameSize.x, frameSize.y, this.position.x - 20, this.position.y - 25, frameSize.x - 25, frameSize.y - 25);
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, 3, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      this.time += delta;
      seq.numFrames == 2 ? this.framePos = Math.floor(this.time * 2) % seq.numFrames : this.framePos = Math.floor(this.time * 7) % seq.numFrames; //am.playMuted();
    }
  }, {
    key: "update",
    value: function update(deltaSeconds) {
      var newPosX = this.position.x + this.speed.x * deltaSeconds;
      var newPosY = this.position.y + this.speed.y * deltaSeconds;
      var direction = this.get_direction();
      var tip = {
        x: this.position.x - direction[0] * this.skeletonSize,
        y: this.position.y - direction[1] * this.skeletonSize
      };
      var tile = this.map.tile(tip, direction);

      if (tile != "W" && tile != "i") {
        this.position.x = newPosX;
        this.position.y = newPosY; //am.volume("CHEST_OPEN", 0);
      }
    }
  }, {
    key: "get_direction",
    value: function get_direction() {
      // Calculate direction based on speed
      var direction = [1, 0];

      if (this.speed.x != 0 && this.speed.x < 0) {
        direction = [-1, 0];
      }

      if (this.speed.y != 0 && this.speed.y > 0) {
        direction = [0, 1];
      }

      if (this.speed.y != 0 && this.speed.y < 0) {
        direction = [0, -1];
      }

      return direction;
    }
  }, {
    key: "keyboard_event",
    value: function keyboard_event(key) {
      switch (key) {
        case "ArrowLeft":
          this.currentSequence = "left";
          this.speed.x = -100; // this.position.x = this.position.x - this.speed;

          break;

        case "ArrowRight":
          this.currentSequence = "right";
          this.speed.x = 100; //this.position.x = this.position.x + this.speed;

          break;

        case "ArrowUp":
          this.currentSequence = "up";
          this.speed.y = -100; // this.position.y = this.position.y - this.speed;

          break;

        case "ArrowDown":
          this.currentSequence = "down";
          this.speed.y = 100; // this.position.y = this.position.y + this.speed;

          break;

        case "a":
          this.open();
          break;
      }
    }
  }, {
    key: "keyboard_event_up",
    value: function keyboard_event_up() {
      this.speed.x = 0;
      this.speed.y = 0;
    }
  }, {
    key: "open",
    value: function open() {
      var _this = this;

      var distance = 0;

      _ChestManager.myChestManager.chests.forEach(function (ori) {
        distance = 0;
        distance = Math.sqrt(Math.pow(_this.position.x - ori.position.x, 2) + Math.pow(_this.position.y - ori.position.y, 2));
        console.log(_ChestManager.myChestManager.latestOpenedChest);

        if (distance < 30 && !ori.isChestOpen) {
          switch (_ChestManager.myChestManager.latestOpenedChest) {
            case "":
              ori.isChestOpen = true;
              _ChestManager.myChestManager.latestOpenedChest = ori.value;
              break;

            case ori.value:
              ori.isChestOpen = true;
              _ChestManager.myChestManager.latestOpenedChest = "";
              break;

            default:
              _ChestManager.myChestManager.chests.forEach(function (e) {
                return e.isChestOpen = false;
              });

              _ChestManager.myChestManager.latestOpenedChest = "";
              ori.isChestOpen = true;
              _ChestManager.myChestManager.latestOpenedChest = ori.value;
              break;
          }
        }
      });
    }
  }]);

  return Skeleton;
}();

exports.Skeleton = Skeleton;
},{"./ChestManager.js":"src/actors/ChestManager.js","../effects/DrawManager":"src/effects/DrawManager.js","../../public/images/skeleton.png":"public/images/skeleton.png"}],"src/app.js":[function(require,module,exports) {
"use strict";

var _ChestManager = require("./actors/ChestManager.js");

var _FPSViewer = require("./actors/FPSViewer.js");

var _Chronometer = require("./actors/Chronometer.js");

var _AudioStatus = require("./actors/AudioStatus.js");

var _Skeleton = require("./actors/Skeleton.js");

var _Map = require("./actors/Map.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import { am } from "../src/effects/AudioManager.js";
window.onload = function () {
  console.log("ready");
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var numChest = 6; // canvas.onclick = () => { };
  // Actors

  var map = new _Map.Map();
  var initialPos = map.get_dungeon_start();
  var fps = new _FPSViewer.FPSViewer({
    x: 5,
    y: 15
  });
  var chrono = new _Chronometer.Chronometer({
    x: 100,
    y: 15
  });
  var audio = new _AudioStatus.AudioStatus({
    x: 250,
    y: 15
  });
  var skeleton = new _Skeleton.Skeleton(initialPos, map);
  var actors = [map, fps, chrono, audio, skeleton].concat(_toConsumableArray(_ChestManager.myChestManager.chests)); // GAME LOOP -> BUCLE DE RENDERIZADO Y ACTUALIZACIÓN

  var lastFrame = 0;

  var render = function render(time) {
    var delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach(function (actor) {
      return actor.update(delta);
    });
    ctx.clearRect(0, 0, 650, 720);
    actors.sort(function (a, b) {
      return a.position.y - b.position.y;
    }).forEach(function (actor) {
      return actor.draw(delta, ctx);
    });
    window.requestAnimationFrame(render);
  }; //setInterval(render, frameTime);


  window.requestAnimationFrame(render); // Eventos de teclado

  document.body.addEventListener("keydown", function (e) {
    actors.forEach(function (actor) {
      return actor.keyboard_event(e.key);
    });
  });
  document.body.addEventListener("keyup", function (e) {
    actors.forEach(function (actor) {
      if (actor.keyboard_event_up) {
        actor.keyboard_event_up(e.key);
      }
    });
  });
};
},{"./actors/ChestManager.js":"src/actors/ChestManager.js","./actors/FPSViewer.js":"src/actors/FPSViewer.js","./actors/Chronometer.js":"src/actors/Chronometer.js","./actors/AudioStatus.js":"src/actors/AudioStatus.js","./actors/Skeleton.js":"src/actors/Skeleton.js","./actors/Map.js":"src/actors/Map.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40965" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/app.js"], null)
//# sourceMappingURL=/app.a6a4d504.js.map