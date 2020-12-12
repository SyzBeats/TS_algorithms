/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
	return x.toString() === x.toString().split("").reverse().join("");
}
// @lc code=end
