const findKthLargest = (nums, k) => {
	nums.sort((a, b) => a - b)
	return nums[nums.length - k]
}
