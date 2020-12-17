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
})({"src/actors/Hero.js":[function(require,module,exports) {
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
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43027" + '/');

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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/actors/Hero.js"], null)
//# sourceMappingURL=/Hero.9e4a35fc.js.map