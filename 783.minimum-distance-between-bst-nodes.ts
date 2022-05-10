/*
 * @lc app=leetcode id=783 lang=typescript
 *
 * [783] Minimum Distance Between BST Nodes
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

function minDiffInBST(root: TreeNode | null): number {
	const list = pushInOrder(root, []);

	let min = Number.MAX_SAFE_INTEGER;

	for (let i = 1; i < list.length; i++) {
		min = Math.min(min, list[i] - list[i - 1]);
	}

	return min;

	function pushInOrder(elem, list) {
		if (!elem) return;

		pushInOrder(elem.left, list);

		list.push(elem.val);

		pushInOrder(elem.right, list);

		return list;
	}
}

// @lc code=end
