package kata

func TwoSum(numbers []int, target int) [2]int {
	var length = len(numbers)
	for i, n := range numbers {
		s := target - n
		for j := i + 1; j < length; j++ {
			if numbers[j] == s {
				return [2]int{i, j}
			}
		}
	}
	return [2]int{}
}
