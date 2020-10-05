/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
	nums.sort((a, b) => a - b)
	const bound = 4

	if (nums.length < bound) { return [] }
	const maxSum = nums.slice(-bound).reduce((a, e) => a + e)
	if (maxSum < target) { return [] }

	const minSum = nums.slice(0, bound).reduce((a, e) => a + e)
	if (minSum > target) { return [] }

	const result = []

	const generateAll = (current, cursor) => {
		if (cursor === nums.length) { return }

		if (current.length === bound) {
			const sum = current.reduce((s, el) => s + el)
			if (sum > target) { return -1 }
			if (sum < target) { return }
			result.push(current)
			return
		}
		let i = 1
		while (cursor + i < nums.length) {
			const r = generateAll([...current, nums[cursor + i]], cursor + i)
			if (r === -1) { break }
			i++
		}
	}
	generateAll([], -1, nums)
	const hash = {}
	for (let i = 0; i < result.length; i++) {
		hash[result[i]] = result[i]
	}
	return Object.values(hash)
}

// console.log(

// 	fourSum(
// 		[-497, -494, -484, -477, -453, -453, -444, -442, -428, -420, -401, -393, -392, -381, -357, -357, -327, -323, -306, -285, -284, -263, -262, -254, -243, -234, -208, -170, -166, -162, -158, -136, -133, -130, -119, -114, -101, -100, -86, -66, -65, -6, 1, 3, 4, 11, 69, 77, 78, 107, 108, 108, 121, 123, 136, 137, 151, 153, 155, 166, 170, 175, 179, 211, 230, 251, 255, 266, 288, 306, 308, 310, 314, 321, 322, 331, 333, 334, 347, 349, 356, 357, 360, 361, 361, 367, 375, 378, 387, 387, 408, 414, 421, 435, 439, 440, 441, 470, 492],
// 		1682
// 	)
// )
