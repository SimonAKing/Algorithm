package leetcode

func subtractProductAndSum(n int) int {
	nums := []int{}
	for n != 0 {
		nums = append(nums, n%10)
		n /= 10
	}

	sum := 0
	product := 1
	for _, item := range nums {
		sum += item
		product *= item
	}

	return product - sum
}
