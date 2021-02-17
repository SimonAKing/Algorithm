const flatArray = (arr: Array<any>, depth: number = 1): Array<any> => arr.reduce((a, v) => a.concat((depth > 1 && Array.isArray(v)) ? flatArray(v, depth - 1) : v), [])
const chunkArray = (arr: number[], size: number): number[][] => Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(size * i, size * i + size))

const matrixReshape = (nums: number[][], r: number, c: number): number[][] => {
	// const arr = nums.flat(1)
	const arr = flatArray(nums)
	if (r * c > arr.length) {
		return nums
	}
	return chunkArray(arr, c)
}
