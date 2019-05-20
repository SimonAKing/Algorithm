package main

import "fmt"

func QuickSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}
	smaller, great := []int{}, []int{}
	v := arr[0]
	for _, a := range arr[1:] {
		if a >= v {
			great = append(great, a)
		} else if a < v {
			smaller = append(smaller, a)
		}
	}
	return append(append(QuickSort(smaller), v), QuickSort(great)...)
}

func main() {
	fmt.Println(QuickSort([]int{3, 5, 2, 5, 7, 2, 9, 0, 1}))
}
