/*
 * @lc app=leetcode id=204 lang=typescript
 *
 * [204] Count Primes
 */

// @lc code=start
function countPrimes(n: number): number {
	/**
	 * thoughts: it could be a recursive problem, as we want to know for a number
	 * and each lower number how many primes they inlcude
	 *
	 * Brute force approach: Check for each number is it is a prime - count it
	 *
	 */
	const isPrime = (number: number): boolean => {
		if (number < 2) return false;

		let minDivision = number / 2;

		let count = 0;

		for (let i = 1; i <= minDivision; i++) {
			if (minDivision % i === 0 && i !== 1) {
				return false;
			}
		}
		if (count === 1) {
			console.log("prime");
		} else console.log("not prime");
		return count === 1;
	};

	isPrime(n);

	return 0;
}
// @lc code=end
