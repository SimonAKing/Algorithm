package main

import "fmt"

func BinarySearch(arr []int, val int, start, end int) int {
	if start > end {
		return -1
	}
	mid := (start + end) / 2
	if arr[mid] > val {
		return BinarySearch(arr, val, start, mid-1)
	} else if arr[mid] < val {
		return BinarySearch(arr, val, mid+1, end)
	}
	return mid
}

func main() {
	type args struct {
		arr   []int
		val   int
		start int
		end   int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{"test1", args{[]int{1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24}, 6, 0, 11}, 2},
	}
	for _, tt := range tests {
		if got := BinarySearch(tt.args.arr, tt.args.val, tt.args.start, tt.args.end); got != tt.want {
			fmt.Println("err")
		}
	}
}
