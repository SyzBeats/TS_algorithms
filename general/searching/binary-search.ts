/**
 *
 * @param array sorted array of values that will be searched through
 * @param key value that has to be found
 */

function binarySearch(array: number[], key: number): number {
	let low = 0;
	let high = array.length - 1;
	let middle = calculateMiddle(low, high);

	while (array[middle] !== key) {
		if (high === low && array[high] !== key) return -1;
		if (array[middle] > key) {
			high = middle - 1;
		}
		if (array[middle] < key) {
			low = middle + 1;
		}
		middle = calculateMiddle(low, high);
	}
	return middle;
}

function calculateMiddle(low: number, high: number): number {
	return Math.floor((low + high) / 2);
}

export { binarySearch };
