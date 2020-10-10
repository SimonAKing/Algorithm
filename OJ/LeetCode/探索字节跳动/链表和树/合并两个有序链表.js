const mergeTwoLists = (l1, l2) => {
	const head = new ListNode()
	let p = head

	while (l1 && l2) {
		if (l1.val <= l2.val) {
			p.next = new ListNode()
			p = p.next
			p.val = l1.val
			l1 = l1.next
		} else {
			p.next = new ListNode()
			p = p.next
			p.val = l2.val
			l2 = l2.next
		}
	}

	while (l1) {
		p.next = new ListNode()
		p = p.next
		p.val = l1.val
		l1 = l1.next
	}

	while (l2) {
		p.next = new ListNode()
		p = p.next
		p.val = l2.val
		l2 = l2.next
	}

	return head.next
}
