package main

func removeElement(nums []int, val int) int {
	length := len(nums)
	c := 0
	for i := 0; i < length-1; i++ {
		if nums[i] == val {
			c++
			nums[i], nums[i+1] = nums[i+1], nums[i]
			i++
		}
	}
	if nums[length-1] == val {
		c++
	}
	return length - c
}
