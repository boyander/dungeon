"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_B = exports.MAP_A = exports.Carkey = void 0;
var Carkey;
(function (Carkey) {
    Carkey[Carkey["UP"] = 0] = "UP";
    Carkey[Carkey["DOWN"] = 1] = "DOWN";
    Carkey[Carkey["LEFT"] = 2] = "LEFT";
    Carkey[Carkey["RIGHT"] = 3] = "RIGHT";
})(Carkey = exports.Carkey || (exports.Carkey = {}));
exports.MAP_A = {
    ArrowUp: Carkey.UP,
    ArrowDown: Carkey.DOWN,
    ArrowLeft: Carkey.LEFT,
    ArrowRight: Carkey.RIGHT,
};
exports.MAP_B = {
    w: Carkey.UP,
    s: Carkey.DOWN,
    a: Carkey.LEFT,
    d: Carkey.RIGHT,
};
