package kata

import (
	"strconv"
	"strings"
)

func NbDig(n int, d int) int {
	t := strconv.Itoa(d)
	return Reduce(Range(0, n, 1), func(total, element, index int, array []int) int {
		return strings.Count(strconv.Itoa(element*element), t)
	}, 0)
}

func Range(start, end, interval int) []int {
	r := make([]int, (end-start)/interval+1)
	for j, i := start, 0; i <= end; i += interval {
		r[j] = i
		j++
	}
	return r
}

func Reduce(array []int, f func(total, element, index int, array []int) int, initialValue int) int {
	total := initialValue
	for index, element := range array {
		total += f(total, element, index, array)
	}
	return total
}
