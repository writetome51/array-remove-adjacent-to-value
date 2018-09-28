import { getAndRemoveAdjacentToValue }
	from '@writetome51/array-get-and-remove-adjacent-to-value/getAndRemoveAdjacentToValue';
import { IAdjacentToValueInfo }
	from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';


// info = {value: anyExceptObject, howMany: number, offset: number}
export function removeAdjacentToValue(info: IAdjacentToValueInfo, array) {
	getAndRemoveAdjacentToValue(info, array);
}