const maxSubArray = nums => {
	let result = nums[0]
	const sums = [nums[0]]

	for (let i = 1; i < nums.length; i++) {
		sums[i] = nums[i] + sums[i - 1]
	}

	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			const sum = i === j ? nums[i] : sums[j] - (i === 0 ? 0 : sums[i - 1])
			result = Math.max(result, sum)
		}
	}

	return result
}
