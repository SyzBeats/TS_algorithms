/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
	// recursive problem

	if (n === 0) return 0;
	if (n === 1) return 1;
	if (n === 2) return 2;

	return climbStairs(n - 1) + climbStairs(n - 2);
}
// @lc code=end
