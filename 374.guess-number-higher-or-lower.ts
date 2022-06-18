/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
	let max = n;
	let min = 0;

	if (guess(max) === 0) {
		return max;
	}

	if (guess(min) === 0) {
		return min;
	}

	while (true) {
		const diff = Math.floor((max - min) / 2);
		const middle = min + diff;

		// check if middle is number
		const res = guess(middle);

		if (res > 0) {
			min = middle;
			continue;
		}

		if (res < 0) {
			max = middle;
			continue;
		}

		return middle;
	}
}
// @lc code=end
