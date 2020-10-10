const quickSort = a => {
	if (!a.length) { return [] }

	return [
		...quickSort(a.filter(e => e < a[0])),
		...a.filter(e => e === a[0]),
		...quickSort(a.filter(e => e > a[0]))]
}

const sortList = function (head) {
	let nums = []

	while (head) {
		nums.push(head.val)
		head = head.next
	}

	const result = new ListNode()
	let p = result
	nums = quickSort(nums)
	for (const n of nums) {
		p.next = new ListNode()
		p = p.next
		p.val = n
	}
	return result.next
}
