const search = (nums, target) => {
	if (!nums.length) { return -1 }
	if (nums.length === 1) { return nums[0] === target ? 0 : -1 }

	let left = 0
	let right = nums.length - 1

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)

		if (nums[mid] === target) { return mid }

		if (nums[0] <= nums[mid]) {
			if (nums[0] <= target && target < nums[mid]) {
				right = mid - 1
			} else {
				left = mid + 1
			}
		} else {
			// mid -> nums.length
			if (target > nums[mid] && target <= nums[nums.length - 1]) {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}

	return -1
}

const r = search(
	[4, 5, 6, 7, 0, 1, 2],
	0
)

console.log(r)
