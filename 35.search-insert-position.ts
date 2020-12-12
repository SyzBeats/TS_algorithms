/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
	let exists = false;
	let filtered = nums.filter(number => {
		if (number === target) {
			exists = true;
		}

		return target >= number;
	});

	if (filtered.length === 0) return 0;
	else return exists ? filtered.length - 1 : filtered.length;
}
// @lc code=end
