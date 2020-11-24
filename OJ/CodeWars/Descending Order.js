"use strict";
exports.__esModule = true;
exports.descendingOrder = void 0;
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().join(''));
}
exports.descendingOrder = descendingOrder;
