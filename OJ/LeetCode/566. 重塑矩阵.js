const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(size * i, size * i + size))

const matrixReshape = (nums, r, c) => {
	const arr = nums.flat(1)
	if (r * c > arr.length) {
		return nums
	}
	return chunk(arr, c)
}
