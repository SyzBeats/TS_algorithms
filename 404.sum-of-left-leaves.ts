/*
 * @lc app=leetcode id=404 lang=typescript
 *
 * [404] Sum of Left Leaves
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
	let sum: number = 0;

	function dfs(root, isLeftNode) {
		if (!root) return;

		if (!root.left && !root.right && isLeftNode) {
			sum += root.val;
		}

		dfs(root.left, true);
		dfs(root.right, false);
	}

	dfs(root, false);

	return sum;
}
// @lc code=end
