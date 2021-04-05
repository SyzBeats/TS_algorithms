/**
 * @description Binary search algorithm implementation
 *
 * Time complexity:
 * min O(1)
 * max O(log(n))
 *
 * The time required to search depends on the height of the tree which is
 * log(n) as log2(16) = 4, as 2^4 = 16
 *
 *           8          (1
 *         /   \
 *        4     12      (2
 *       / \    / \
 *      2   6  10 14    (3
 *
 * @param array sorted array of values that will be searched through
 * @param key value that has to be found
 */

/**
 * @param array searchable and sorted array
 * @param key the value that has to be found
 */
function binarySearch(array: number[], key: number): number {
	// set initial values
	let low = 0;
	let high = array.length - 1;
	let middle = calculateMiddle(low, high);

	// main implementation
	while (array[middle] !== key) {
		// case if not found at all
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

/**
 * @description helper function to calculate the current middle
 * @param low the lower bound in the current search range
 * @param high the higher bound in the current search range
 */
function calculateMiddle(low: number, high: number): number {
	return Math.floor((low + high) / 2);
}

export { binarySearch };
