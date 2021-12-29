"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLimits = void 0;
const checkLimits = (position) => {
    if (position.x < 1020 &&
        position.x > 0 &&
        position.y < 1024 &&
        position.y > 0) {
        return true;
    }
    return false;
};
exports.checkLimits = checkLimits;
