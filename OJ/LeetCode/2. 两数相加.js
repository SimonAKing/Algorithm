/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
	let curry = 0
	const head = new ListNode()
	let p = head
	while (l1 && l2) {
		p.next = new ListNode()
		p = p.next
		const sum = (l1.val + l2.val + curry)
		p.val = sum % 10
		curry = Math.floor(sum / 10)
		l1 = l1.next
		l2 = l2.next
	}

	while (l1) {
		p.next = new ListNode()
		p = p.next
		const sum = (l1.val + curry)
		p.val = sum % 10
		curry = Math.floor(sum / 10)
		l1 = l1.next
	}

	while (l2) {
		p.next = new ListNode()
		p = p.next
		const sum = (l2.val + curry)
		p.val = sum % 10
		curry = Math.floor(sum / 10)
		l2 = l2.next
	}

	if (curry) {
		p.next = new ListNode()
		p = p.next
		p.val = curry
	}
	p.next = null

	return head.next
}
