"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_adjacent_to_value_1 = require("@writetome51/array-get-and-remove-adjacent-to-value");
// info = {value: anyExceptObject, howMany: number, offset: number}
function removeAdjacentToValue(info, array) {
    array_get_and_remove_adjacent_to_value_1.getAndRemoveAdjacentToValue(info, array);
}
exports.removeAdjacentToValue = removeAdjacentToValue;
