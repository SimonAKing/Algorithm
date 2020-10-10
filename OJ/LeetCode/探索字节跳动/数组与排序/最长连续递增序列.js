const findLengthOfLCIS = nums => {
	let result = 0
	let length = 0
	let current = Number.MIN_VALUE
	for (const n of nums) {
		length = n > current ? (length + 1) : 1
		result = Math.max(result, length)
		current = n
	}
	return result
}
