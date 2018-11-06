To include in your project:

import {removeAdjacentToValue} from '@writetome51/array-remove-adjacent-to-value';

removeAdjacentToValue(info, array) : void 

info = {value: anyExceptObject, offset: integer, howMany: integer greater than zero}

This function removes and returns adjacent items from the passed array,  
starting with, or close to, info.value.

Example of usage:

let arrayToModify = [1,3,5,7,9,11,13,15,17];  
let result = removeAdjacentToValue({value: 7, offset: 0, howMany: 3},  arrayToModify);  
result will contain [7, 9, 11] .  
arrayToModify will be left as [1,3,5,13,15,17].  
(If offset was 2, for example, result would contain [11, 13, 15])


More examples:

let arrayToModify = [1,3,5,7,9,11,13,15,17];  
let result = getAndRemoveAdjacentToValue({value: 13, offset: -2, howMany: 4},  arrayToModify);  
result will contain [9, 11, 13, 15] .  
arrayToModify will be left as [1,3,5,7,17].