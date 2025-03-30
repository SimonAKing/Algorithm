package kata

import "sort"

func SortByLength(arr []string) []string {
	sort.Slice(arr, func(a, b int) bool {
		return len(arr[b]) > len(arr[a])
	})
	return arr
}
