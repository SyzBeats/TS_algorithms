/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
	const nodes = [];

	if (!root) {
		return [];
	}

	if (root.left) {
		traverse(root.left);
	}

	nodes.push(root.val);

	if (root.right) {
		traverse(root.right);
	}

	function traverse(node) {
		if (!node) {
			return;
		}

		if (node.left) {
			traverse(node.left);
		}

		nodes.push(node.val);

		if (node.right) {
			traverse(node.right);
		}
	}

	return nodes;
}
// @lc code=end
