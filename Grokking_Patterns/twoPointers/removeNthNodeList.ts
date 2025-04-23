class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val = 0, next = null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// Given the head of a singly linked list, remove the nth node from the end of the list and return its head.
function removeNthLastNode(head: ListNode | null, n: number): ListNode | null {
	if (!head) return null;

	let left: ListNode | null = head;
	let right: ListNode | null = head;

	for (let i = 0; i < n; i++) {
		if (right == null || right.next == null) {
			break;
		} else {
			right = right.next;
		}
	}
	if (!right.next) {
		return left.next;
	}
	while (right.next) {
		right = right.next;
		left = left!.next;
	}
	left!.next = left!.next!.next;

	return head;
}
