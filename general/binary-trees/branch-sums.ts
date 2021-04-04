// This is the class of the input root.
// Do not edit it.
class BinaryTree {
	value: number;
	left: BinaryTree | null;
	right: BinaryTree | null;

	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export function branchSums(root: BinaryTree): number[] {
	// Write your code here.
	let sums: number[] = [];

	helper(sums, 0, root);
	return sums;
}

function helper(sums: number[], current: number, tree: BinaryTree) {
	// add the current sum
	if (tree.value) current += tree.value;

	// no value - push to array
	if (!tree.left && !tree.right) sums.push(current);

	// track the left node first
	if (tree.left) {
		helper(sums, current, tree.left);
	}

	// track the right nodes
	if (tree.right) {
		helper(sums, current, tree.right);
	}
}
