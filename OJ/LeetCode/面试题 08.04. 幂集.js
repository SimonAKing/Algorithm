const subsets = nums => {
	const result = [[]]

	const permuate = (current, index) => {
		for (let i = index; i < nums.length; i++) {
			const arr = [...current, nums[i]]
			result.push(arr)
			permuate(arr, i + 1)
		}
	}

	permuate([], 0)

	return result
}

console.log(subsets([1, 2, 3]))
