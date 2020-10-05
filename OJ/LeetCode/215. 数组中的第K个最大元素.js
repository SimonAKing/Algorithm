/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
	nums.sort((a, b) => a - b)
	return nums[nums.length - k - 1]
}
