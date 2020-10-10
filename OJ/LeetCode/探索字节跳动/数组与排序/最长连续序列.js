const longestConsecutive = nums => {
	let result = 0
	const hash = {}
	for (const n of nums) {
		hash[n] = true

		let count = 1
		let left = n - 1
		let right = n + 1
		while (hash[left]) {
			count++
			left--
		}
		while (hash[right]) {
			count++
			right++
		}

		result = Math.max(count, result)
	}

	return result
}
