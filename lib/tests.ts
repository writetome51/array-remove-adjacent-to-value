import { removeAdjacentToValue } from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let arrayToModify = [1, 3, 5, 7, 9, 11, 13, 15, 17];

removeAdjacentToValue({value: 7, offset: 0, howMany: 3}, arrayToModify);

if (arraysMatch(arrayToModify, [1, 3, 5, 13, 15, 17])) {
	console.log('test 1 passed');
}
else console.log('test 1 failed');


arrayToModify = [1, 3, 5, 7, 9, 11, 13, 15, 17];
removeAdjacentToValue({value: 13, offset: -2, howMany: 4}, arrayToModify);

if (arraysMatch(arrayToModify, [1, 3, 5, 7, 17])) console.log('test 2 passed');
else console.log('test 2 failed');


let errorTriggered = false;
try {
	// howMany cannot be zero
	removeAdjacentToValue({value: 1, offset: 0, howMany: 0}, arrayToModify);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 failed');


errorTriggered = false;
try {
	// 1 is first item in array, so offset -1 is impossible:
	removeAdjacentToValue({value: 1, offset: -1, howMany: 2}, arrayToModify);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 failed');


errorTriggered = false;
try {
	removeAdjacentToValue({value: 1, offset: 0, howMany: 6}, arrayToModify);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 failed');


errorTriggered = false;
try {
	removeAdjacentToValue({value: 19, offset: 0, howMany: 1}, arrayToModify);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 failed');
