/*
 * @lc app=leetcode id=322 lang=typescript
 *
 * [322] Coin Change
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
	// for each coin, check how many possible changes there are up until the desired number

	const possibleChanges = Array(amount + 1);
	possibleChanges.fill(0);
	// base case is one
	possibleChanges[0] = 1;

	for (let coin of coins) {
		for (let value = 1; value <= amount; value++) {
			if (coin <= value) {
				possibleChanges[value] += possibleChanges[value - coin];
			}
		}
	}
	console.log(possibleChanges);
	// return possibleChanges[number];
	// fewest number ?
	return Math.min(...possibleChanges);
}
// @lc code=end
