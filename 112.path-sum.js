/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const hasPathSum = function (root, targetSum) {
	return dfs(root, 0);

	function dfs(root, sum) {
		if (!root) {
			return false;
		}

		const currentSum = sum + root.val;

		if (!root.left && !root.right) {
			return currentSum === targetSum;
		}

		const leftHas = dfs(root.left, currentSum);
		const rightHas = dfs(root.right, currentSum);

		return leftHas || rightHas;
	}
};
// @lc code=end
