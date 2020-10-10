const getPermutation = (n, k) => {
	const nums = []
	let factorial = 1

	for (let i = 1; i <= n; i++) {
		nums.push(i)
		factorial *= i
	}

	k--

	let result = ''

	while (nums.length) {
		factorial /= nums.length

		const index = Math.floor(k / factorial)
		result += nums[index]
		nums.splice(index, 1)
		k -= index * factorial
	}

	return result
}
