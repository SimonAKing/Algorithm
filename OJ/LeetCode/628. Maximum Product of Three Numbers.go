package leetcode

import (
	"sort"
)

type IntSlice []int

func (s IntSlice) Len() int           { return len(s) }
func (s IntSlice) Swap(i, j int)      { s[i], s[j] = s[j], s[i] }
func (s IntSlice) Less(i, j int) bool { return s[i] > s[j] }

func maximumProduct(nums []int) int {
	sort.Sort(IntSlice(nums))
	length := len(nums)
	if nums[0] > 0 && nums[1] < 0 && nums[2] < 0 {
		return nums[0] * nums[length-1] * nums[length-2]
	}
	if nums[0] > 0 && nums[1] > 0 && nums[2] > 0 {
		if nums[length-1]*nums[length-2] > nums[1]*nums[2] {
			return nums[0] * nums[length-1] * nums[length-2]
		}
	}
	return nums[0] * nums[1] * nums[2]
}
