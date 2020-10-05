/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// const minSubArrayLen = function (s, nums) {
// 	let result = Number.MAX_VALUE
// 	for (let i = 0; i < nums.length; i++) {
// 		let sum = 0
// 		for (let j = i; j < nums.length; j++) {
// 			sum += nums[j]
// 			if (sum >= s) {
// 				result = Math.min(result, j - i + 1)
// 				break
// 			}
// 		}
// 	}

// 	return result === Number.MAX_VALUE ? 0 : result
// }

const minSubArrayLen = function (s, nums) {
	let result = nums.length + 1
	let sum = 0
	let cursor = 0

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		while (sum >= s) {
			result = Math.min(result, i - cursor + 1)
			sum -= nums[cursor]
			cursor++
		}
	}

	return result === nums.length + 1 ? 0 : result
}
