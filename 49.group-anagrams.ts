/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
	/**
	 * This solution makes use of the fact that anagrams always contain
	 * the exact same letters. Therefore two sorted anagrams result in the
	 * same string. This string can be used as "key" to store the strings in a
	 * hash map and collect each anagram
	 */
	const hashMap = {};

	for (const str of strs) {
		// sorting the current string
		const sorted = str.split('').sort().join('');

		if (!hashMap[sorted]) {
			hashMap[sorted] = [str];
			continue;
		}

		hashMap[sorted].push(str);
	}

	// instantiate an array to contain the result
	const result = [];

	// each
	for (const key in hashMap) {
		result.push(hashMap[key]);
	}

	return result;
}
// @lc code=end
