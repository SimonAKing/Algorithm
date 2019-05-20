package kata

import "strings"

func duplicate_count(s string) int {
	m := map[string]int{}
	r := 0
	for _, s := range s {
		t := strings.ToLower(string(s))
		if m[t] == 0 {
			m[t]++
		} else if m[t] == 1 {
			r++
			m[t]++
		}
	}
	return r
}
