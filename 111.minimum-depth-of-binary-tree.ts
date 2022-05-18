/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start

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

function minDepth(root: TreeNode | null): number {
	/**
	 * finding the minimum depth means to check each level
	 * if on one level, we are able to find a leaf node, it is the first solution.
	 *
	 * Meaning - we check BFS - going through all nodes in the first level, then checking the nodes in other levels
	 */

	if (!root) return 0;

	const nodesToCheck = [{ node: root, level: 1 }];

	while (nodesToCheck.length) {
		// check if this is a leaf

		if (!nodesToCheck[0].node?.left && !nodesToCheck[0].node?.right) {
			return nodesToCheck[0].level;
		}

		// push left and right to queue and pop
		if (nodesToCheck[0].node.left) {
			nodesToCheck.push({ node: nodesToCheck[0].node.left, level: nodesToCheck[0].level + 1 });
		}

		if (nodesToCheck[0].node.right) {
			nodesToCheck.push({ node: nodesToCheck[0].node.right, level: nodesToCheck[0].level + 1 });
		}

		// pop queue
		nodesToCheck.shift();
	}
}
// @lc code=end
