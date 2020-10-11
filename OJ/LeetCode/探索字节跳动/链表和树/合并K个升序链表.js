const mergeKLists = lists => {
	const result = new ListNode()
	let p = result

	while (lists.length) {
		lists = lists.filter(Boolean)
		const minValue = Math.min(...lists.map(({ val }) => val))
		let count = 0
		for (let i = 0; i < lists.length; i++) {
			if (lists[i].val === minValue) {
				lists[i] = lists[i].next
				count++
			}
		}

		while (count) {
			p.next = new ListNode()
			p = p.next
			p.val = minValue
			count--
		}
	}

	return result.next
}
