/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
function countAndSay(n: number): string {
	if (n === 1) return "" + 1;
	const lastString: string = countAndSay(n - 1);
	return stringBuilder(lastString);
}

function stringBuilder(current: string): string {
	let lastCountAndSay = "";
	let counter = 0;
	let currNumber = current[0];

	for (let i = 0; i < current.length; i++) {
		// count up
		if (currNumber === current[i]) {
			// match, count up
			counter++;
		} else {
			// build string
			lastCountAndSay += `${counter}${currNumber}`;
			currNumber = current[i];
			counter = 1;
		}
		// last iteration
		if (i === current.length - 1) {
			lastCountAndSay += `${counter}${currNumber}`;
		}
	}
	return lastCountAndSay;
}
// @lc code=end

/**
 *
 * when 2 - davor 1
 * 11
 */
