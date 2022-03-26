/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start

/**
 * @description function to determine the one single non existant value
 * @param nums array of numbers
 */
function singleNumber(nums: number[]): number {
	// sort
	nums = nums.sort((a, b) => a - b);
	// base case
	if (nums.length === 1) return nums[0];

	for (let i = 0; i < nums.length; i++) {
		if (typeof nums[i + 1] !== 'undefined') {
			// next item exists
			if (nums[i] !== nums[i + 1]) {
				// ...and does not match with current
				if (typeof nums[i - 1] !== 'undefined') {
					// previus item exists
					if (nums[i - 1] !== nums[i]) {
						// ... and does not match with current
						return nums[i];
					}
				}
				if (typeof nums[i - 1] === 'undefined') return nums[i];
			}
		} else {
			// next item does not exist
			if (typeof nums[i - 1] !== 'undefined') {
				if (nums[i] !== nums[i - 1]) return nums[i];
			}
		}
	}
}

/**
 * @description The most crucial trick here is to recognize
 * that if you XOR any same number together, you cancel it out (=0).
 *
 * nums = [2,4,5,4,3,5,2]
 *
 * XORing everything together
 * = 2 ^ 4 ^ 5 ^ 4 ^ 3 ^ 5 ^ 2
 * = (2^2) ^ (4^4) ^ (5^5) ^ 3
 * = 0 ^ 0 ^ 0 ^ 3
 * = 3
 *
 * The reduce here just simplifies the previous for loop into one line, it's not doing anything different.
 * The initializer 0 is put there to prevent the the scenerio where nums is an empty list
 *
 * The reason this works: the XOR operation is both commutative and associative.
 * So one can use a XORation (just like a SUMmation) of the numbers and regardless
 * the order of the elements to be XORed is it will yield the same result, i.e.,
 * the same result as if the unique element was the first element and
 * all the other came in pairs afterwards.
 * From this it's easy to deduce that the final result is equal to the first element,
 * which is the unique element as stated before.
 */
function solveXOR(nums: number[]) {
	// bitwise XOR
	return nums.reduce((prev, curr) => prev ^ curr, 0);
}
// @lc code=end
