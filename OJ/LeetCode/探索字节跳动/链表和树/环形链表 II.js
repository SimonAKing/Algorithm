const detectCycle = head => {
	const visited = new Set()

	while (head) {
		if (visited.has(head)) {
			return head
		}

		visited.add(head)
		head = head.next
	}

	return null
}
