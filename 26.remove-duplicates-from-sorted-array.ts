/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
	let current = nums[0];

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === current) {
			nums[i] = null;
		} else {
			current = nums[i];
		}
	}

	nums.sort((a, b) => {
		if (typeof a !== 'number' && typeof b !== 'number') {
			return 0;
		}
		if (typeof a !== 'number') {
			return 1;
		}
		if (typeof b !== 'number') {
			return -1;
		}
		return a - b;
	});

	return nums.filter(num => num !== null).length;
}

function moveToEnd(array, index) {
	for (let i = index; i < array.length; i++) {
		swap(array, i, i + 1);
	}
}

function swap(array, i, j) {
	if (!array[j]) return;

	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

// @lc code=end
