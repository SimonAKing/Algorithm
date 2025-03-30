package leetcode

func decompressRLElist(nums []int) []int {
	result := []int{}
	for i := 0; i < len(nums); i += 2 {
		freq, val := nums[i], nums[i+1]
		for j := 0; j < freq; j++ {
			result = append(result, val)
		}
	}
	return result
}
