/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
	const matchMap = new Map();
	matchMap.set("(", ")");
	matchMap.set("{", "}");
	matchMap.set("[", "]");

	// set a stack of opening chars

	const stack: string[] = [];
	let match = true;
	if (s.length < 2) return false;
	s.split("").forEach(char => {
		if (!match) return false;
		if (["(", "[", "{"].includes(char)) {
			// it is a opening bracket

			stack.push(char);
		} else {
			if (matchMap.get(stack[stack.length - 1]) === char) {
				// valid, matching
				stack.pop();
			} else {
				match = false;
			}
		}
	});
	return match && stack.length === 0;
}
// @lc code=end
