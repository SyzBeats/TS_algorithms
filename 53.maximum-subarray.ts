/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
	let sum = 0;
	let max = nums[0];

	for (let i = 0; i < nums.length; i++) {
		sum = sum + nums[i];
		max = Math.max(max, sum);
		if (sum < 0) {
			sum = 0;
		}
	}

	return max;
}
// @lc code=end
