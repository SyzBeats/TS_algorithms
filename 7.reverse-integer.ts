/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
	let num = x;
	let revArray = [];
	while (Math.abs(num) > 0) {
		let lastInt = num % 10;
		num = (num - lastInt) / 10;
		revArray.push(lastInt);
	}

	let res = revArray.reduce((prev, accum, idx, arr) => {
		return prev + accum * Math.pow(10, arr.length - 1 - idx);
	}, 0);

	if (Math.abs(res) > Math.pow(2, 31) - 1) return 0;
	else return res;
}
// @lc code=end
