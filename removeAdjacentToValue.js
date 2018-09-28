"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveAdjacentToValue_1 = require("@writetome51/array-get-and-remove-adjacent-to-value/getAndRemoveAdjacentToValue");
// info = {value: anyExceptObject, howMany: number, offset: number}
function removeAdjacentToValue(info, array) {
    getAndRemoveAdjacentToValue_1.getAndRemoveAdjacentToValue(info, array);
}
exports.removeAdjacentToValue = removeAdjacentToValue;
