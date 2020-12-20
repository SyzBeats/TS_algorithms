/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
	nums.sort((a, b) => Math.abs(a) - Math.abs(b));
	return nums.map(num => num * num);
}
// @lc code=end
