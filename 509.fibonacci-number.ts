/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number, memo = {}): number {
	// the base fibonacci is too slow

	if (n in memo) {
		return memo[n];
	}

	if (n === 0) {
		return 0;
	}

	if (n <= 2) {
		return 1;
	}

	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

	return memo[n];
}
// @lc code=end
