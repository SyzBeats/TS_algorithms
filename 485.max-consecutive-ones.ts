/*
 * @lc app=leetcode id=485 lang=typescript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
	let maxStack = 0;
	let currMax = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 1) {
			currMax++;
			if (maxStack < currMax) maxStack = currMax;
		}
		if (nums[i] === 0) {
			if (maxStack < currMax) maxStack = currMax;
			currMax = 0;
		}
	}
	return maxStack;
}
// @lc code=end
