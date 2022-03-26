// @ts-ignore

/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start

// Definition for singly-linked list.
// class ListNode {
// 	val: number;
// 	next: ListNode | null;
// 	constructor(val?: number, next?: ListNode | null) {
// 		this.val = val === undefined ? 0 : val;
// 		this.next = next === undefined ? null : next;
// 	}
// }

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let currentNode = new ListNode();
	const head = currentNode;

	while (l1 !== null && l2 !== null) {
		if (l1.val < l2.val) {
			currentNode.next = new ListNode(l1.val);
			l1 = l1.next;
		} else {
			currentNode.next = new ListNode(l2.val);
			l2 = l2.next;
		}

		currentNode = currentNode.next;
	}

	if (l1 !== null) {
		currentNode.next = l1;
	}

	if (l2 !== null) {
		currentNode.next = l2;
	}

	return head.next;
}
// @lc code=end
