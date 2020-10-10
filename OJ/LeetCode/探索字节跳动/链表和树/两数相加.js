const addTwoNumbers = (l1, l2) => {
	const head = new ListNode()
	let = p = head
	let curry = 0
	while (l1 && l2) {
		const sum = l1.val + l2.val + curry
		p.next = new ListNode()
		p = p.next
		p.val = sum % 10
		curry = Math.floor(sum / 10)
		l1 = l1.next
		l2 = l2.next
	}

	while (l1) {
		const sum = l1.val + curry
		p.next = new ListNode()
		p = p.next
		p.val = sum % 10
		curry = Math.floor(sum / 10)
		l1 = l1.next
	}

	while (l2) {
		const sum = l2.val + curry
		p.next = new ListNode()
		p = p.next
		p.val = sum % 10
		curry = Math.floor(sum / 10)
		l2 = l2.next
	}

	if(curry) {
		p.next = new ListNode()
		p = p.next
		p.val = curry
	}

	return head.next
}
