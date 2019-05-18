package kata

import (
	"sort"
)

func ValidateSolution(m [][]int) bool {
	var c []int
	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			c = append(c, m[j][i])
		}
		if !ValidateOneToNine(c) || !ValidateOneToNine(m[i]) {
			return false
		}
	}
	for i := 0; i < 9; i += 3 {
		for j := 0; j < 9; j += 3 {
			c = []int{}
			for k := 0; k < 3; k++ {
				c = append(c, m[i+k][j:j+3]...)
			}
			if !ValidateOneToNine(c) {
				return false
			}
		}
	}
	return true
}

func ValidateOneToNine(_array []int) bool {
	array := make([]int, 9)
	copy(array, _array)
	sort.Ints(array)
	for i := 1; i <= 9; i++ {
		if array[i-1] != i {
			return false
		}
	}
	return true
}
