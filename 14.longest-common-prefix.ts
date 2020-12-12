/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

/**
 * sort them by length of string
 * const minStr = array[0].length
 * check agains minstr as restriction, in minst = [""] return ""
 *
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 0) return "";

	// runtime improvement
	let sorted = strs.sort((a, b) => a.length - b.length);

	let prefix = sorted[0];

	for (let i = 1; i < sorted.length; i++) {
		while (sorted[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);
			if (prefix === "") return "";
		}
	}
	return prefix;
}
// @lc code=end
