/**
 *  @description The algorithm will divide into 2 sub arrays. we will always search the smallest element
 * in the list an append it to the remaining array in the beginning (withoput creating a new Array)
 * @param array unsorted numbers
 */

function selectionSort(array: number[]): number[] {
	// Write your code here.
	for (let i = 0; i < array.length; i++) {
		let minIndex = i;
		for (let j = i; j < array.length; j++) {
			if (array[j] < array[minIndex]) minIndex = j;
		}
		if (array[minIndex] < array[i]) swap(array, minIndex, i);
	}
	return array;
}

function swap(array: number[], a: number, b: number):void {
	let temp = array[a];
	array[a] = array[b];
	array[b] = temp;
}
