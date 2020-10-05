/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
	const head = new ListNode()
	let p = head
	let cursors = lists

	while (cursors.length) {
		cursors = cursors.filter(Boolean)
		const minValue = Math.min(...cursors.map(({ val }) => val))
		let count = 0
		for (let i = 0; i < cursors.length; i++) {
			if (cursors[i].val === minValue) {
				count++
				cursors[i] = cursors[i].next
			}
		}
		while (count) {
			p.next = new ListNode()
			p = p.next
			p.val = minValue
			count--
		}
	}

	return head.next
}
