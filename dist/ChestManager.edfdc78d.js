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
})({"public/images/dungeonStuffs3.png":[function(require,module,exports) {
module.exports = "/dungeonStuffs3.5ac8f1c2.png";
},{}],"src/actors/Chest.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chest = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chest = /*#__PURE__*/function () {
  function Chest(position, value, head, col, isChestOpen) {
    _classCallCheck(this, Chest);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.value = value;
    this.head = head;
    this.color = col;
    this.isChestOpen = isChestOpen;
    this.spritesheet = new Image();
    this.spritesheet.src = require("../../public/images/dungeonStuffs3.png");
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
      var selectImageChest = {
        x: 30,
        y: 18
      };
      var frameSize = {
        x: 240,
        y: 174
      };

      if (this.isChestOpen) {
        frameSize = {
          x: 240,
          y: 208
        };
      }

      ctx.drawImage(this.spritesheet, frameSize.x, frameSize.y, selectImageChest.x, selectImageChest.y, this.position.x - 12, this.position.y - 18, 45, 30);
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, 3, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.head, 13, 8, 1.5 * Math.PI, 0.5 * Math.PI, this.value % 2 ? false : true);
      ctx.closePath();
      this.isChestOpen === true ? ctx.fill() : ctx.stroke();

      if (this.isChestOpen) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x + 15, this.position.y - 10, 8, 1.5 * Math.PI, 0.5 * Math.PI, this.value % 2 ? false : true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
  }]);

  return Chest;
}();

exports.Chest = Chest;
},{"../../public/images/dungeonStuffs3.png":"public/images/dungeonStuffs3.png"}],"src/actors/Map.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dungeonMap = "\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\nW..S.........WW............W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW..........................W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW......WW....WW....WW......W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW.WWWW.WW..........WW.WWWW.W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW.WWWW.WW.W......W.WW.WWWW.W\nW.........W......W.........W\nW.WWWW.WW.W......W.WW.WWWW.W\nW.WWWW.WW.WWW..WWW.WW.WWWW.W\nW.WWWW.WW..........WW.WWWW.W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW.WWWW.WW.WWWWWWWW.WW.WWWW.W\nW............WW............W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW.WWWW.WWWWW.WW.WWWWW.WWWW.W\nW...WW................WW...W\nWWW.WW.WW.WWWWWWWW.WW.WW.WWW\nWWW.WW.WW.WWWWWWWW.WW.WW.WWW\nW......WW....WW....WW......W\nW.WWWWWWWWWW.WW.WWWWWWWWWW.W\nW.WWWWWWWWWW.WW.WWWWWWWWWW.W\nW..........................W\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n";

var Map = /*#__PURE__*/function () {
  function Map() {
    var tileSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 23;

    _classCallCheck(this, Map);

    this.spritesheet = new Image();
    this.spritesheet.src = require("../../public/images/dungeonStuffs3.png");
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
          if (cell == "." || cell == "S") this.draw_floor(ctx, i, j); // if (cell == "*") this.draw_dot(ctx, i, j, "super");
        }
      }
    }
  }]);

  return Map;
}();

exports.Map = Map;
},{"../../public/images/dungeonStuffs3.png":"public/images/dungeonStuffs3.png"}],"src/actors/ChestManager.js":[function(require,module,exports) {
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
    new _Chest.Chest(this.chest_start_options(), "AA", 375, "red", false), new _Chest.Chest(this.chest_start_options(), "AA", 380, "red", false), new _Chest.Chest(this.chest_start_options(), "BB", 410, "blue", false), new _Chest.Chest(this.chest_start_options(), "BB", 415, "blue", false), new _Chest.Chest(this.chest_start_options(), "CC", 445, "green", false), new _Chest.Chest(this.chest_start_options(), "CC", 450, "green", false)];
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
},{"./Chest.js":"src/actors/Chest.js","./Map.js":"src/actors/Map.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "32897" + '/');

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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/actors/ChestManager.js"], null)
//# sourceMappingURL=/ChestManager.edfdc78d.js.map