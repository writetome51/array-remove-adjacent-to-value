To include in your project:

`import {removeAdjacentToValue} from '@writetome51/array-remove-adjacent-to-value';`

    removeAdjacentToValue(info, array) : void 

    info = {  
        value: any except object (the value to search for),  
        offset: integer (indicates where, in relation to value, to begin removing items),  
        howMany: integer greater than zero (how many items to remove)  
    }

This function removes adjacent items from the passed array,  
starting with, or close to, info.value.  The operation only applies to  
the first found instance of of info.value  

Examples of usage:

    let arrayToModify = [1,3,5,7,9,11,13,15,17];  
    removeAdjacentToValue({value: 7, offset: 0, howMany: 3},  arrayToModify);  
    // items that get removed are [7, 9, 11] .  
    // If offset was 2, for example, removed items would be [11, 13, 15]   
    // arrayToModify will be left as [1,3,5,13,15,17].  


    let arrayToModify = [1,3,5,7,9,11,13,15,17];  
    removeAdjacentToValue({value: 13, offset: -2, howMany: 4},  arrayToModify);  
    // items that get removed are [9, 11, 13, 15] .  
    // arrayToModify will be left as [1,3,5,7,17] .