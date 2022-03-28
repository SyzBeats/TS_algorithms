/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start

/**
 * Some thougts: I can have two pointers that work towards the end of the array.
 * Another solution is to look for min and max of the arrays.
 * We set the initial minimum price to the first element. Once that has been done,
 * you can search the next maximum sell price.
 * on each step, check if there is a new maximum sell price. Compare if this is bigger than the current maxProfit
 *
 * if there is a new minimum, make sure to "reset" the minBuy and maxPrice as from there, there might be a higher maximum in the future
 */

function maxProfit(prices: number[]): number {
	let maxProfit = 0;
	let minBuy = prices[0];
	let maxSell = prices[0];

	for (const price of prices) {
		// everytime there is a new minimum, we need to reset the minBuy and maxSell
		// as we simply divide the array into smaller sections. We keep track
		// of the current maxProfit but will compare it against upcoming market changes

		if (price < minBuy) {
			minBuy = price;
			maxSell = price;
		}

		maxSell = Math.max(maxSell, price);
		maxProfit = Math.max(maxProfit, maxSell - minBuy);
	}

	return maxProfit;
}

// @lc code=end
