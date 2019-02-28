## removeAdjacentToValue(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: anyExceptObject,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;offset: integer,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany: integer_greater_than_zero<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Removes `howMany` adjacent items from `array`, starting with, or  
close to, `value`.  Exactly where removal begins is decided by `offset`,  
which is the position, relative to `value`, where to begin removing.  
For example, if `offset` is 0, then removal begins at `value`.  If -1,  
it begins one place to the left of `value`.  If 1, it begins one place to the  
right.  

Note: the function only works with the first found instance of `value`.

### Examples
```
let array = [1,3,5,7,9,11,13,15,17];  
removeAdjacentToValue(
    {value: 11, offset: 0, howMany: 3},  
    array
);  
// items that get removed are [11,13,15] .  
// array is now [1,3,5,7,9,17].  


let array = [1,3,5,7,9,11,13,15,17];  
removeAdjacentToValue(
    {value: 11, offset: -2, howMany: 4}, 
    array
);  
// items that get removed are [7,9,11,13] .  
// array is now [1,3,5,15,17] .


let array = [1,3,5,7,9,11,13,15,17];  
removeAdjacentToValue(
    {value: 11, offset: 2, howMany: 2}, 
    array
);  
// items that get removed are [15,17] .  
// array is now [1,3,5,7,9,11,13] .
```

### Installation
`npm i  @writetome51/array-remove-adjacent-to-value`
 
    
### Loading
```
// if using TypeScript:
import {removeAdjacentToValue} from '@writetome51/array-remove-adjacent-to-value';
// if using ES5 JavaScript:
var removeAdjacentToValue = 
    require('@writetome51/array-remove-adjacent-to-value').removeAdjacentToValue;
```