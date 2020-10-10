const reverseList = head => {
	let a = head
	let b = null
	let c = null

	while (a) {
		b = a.next
		a.next = c
		c = a
		a = b
	}

	return c
}
