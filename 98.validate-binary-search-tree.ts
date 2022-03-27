/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start

//   Definition for a binary tree node.

// class TreeNode {
// 	val: number;
// 	left: TreeNode | null;
// 	right: TreeNode | null;
// 	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
// 		this.val = val === undefined ? 0 : val;
// 		this.left = left === undefined ? null : left;
// 		this.right = right === undefined ? null : right;
// 	}
// }
// this is a recursive problem
// when checking a node, we alsways look if the left node is smaller than the current node
// we also check if the right node is bigger than the current node
// if this is fulfilled, we check if the left and right nodes are valid BSTs
// so we pass them to the function again.

function isValidBST(root: TreeNode | null, min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER): boolean {
	// if the current node has no value, we consider it valid
	if (root === null) {
		return true;
	}

	// if the current value is smaller than the minimum allowed, the tree is not balanced
	if (root.val <= min) {
		return false;
	}

	// if the current value is bigger than the max, the tree is not balanced
	if (root.val >= max) {
		return false;
	}

	// check if the left side of the current node is valid. The left node
	// is the new root. the minimum is always the max min. The maximum has to be the
	// previous nodes value during each step
	const leftValid = isValidBST(root.left, min, root.val);

	// check if the right side of the current node is valid. The right node
	// is the new root. There is no maximum. The minimum has to be the
	// previous nodes value during each step
	const rightValid = isValidBST(root.right, root.val, max);

	return leftValid && rightValid;
}
// @lc code=end
