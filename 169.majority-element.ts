/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

function alternateSolution(nums: number[]): number {
	nums.sort();
	// as we can be sure that occurence of number > n/2
	return nums[nums.length / 2];
}

// @lc code=start
function majorityElement(nums: number[]): number {
	let maxElem = 0;
	let maxOccurences = 0;
	const stack = new Map();
	for (let num of nums) {
		let stored = stack.get(num);
		if (!stored) stack.set(num, 1);
		if (stored) stack.set(num, stored + 1);
	}

	stack.forEach((val, key) => {
		if (maxOccurences < val) {
			maxOccurences = val;
			maxElem = key;
		}
	});

	return maxElem;
}
// @lc code=end
