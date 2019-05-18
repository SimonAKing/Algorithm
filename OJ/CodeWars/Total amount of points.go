package kata

import (
	"strconv"
	"strings"
)

func Points(games []string) int {
	total := 0
	for _, v := range games {
		t := strings.Split(v, ":")
		x, _ := strconv.Atoi(t[0])
		y, _ := strconv.Atoi(t[1])
		if x == y {
			total += 1
		} else if x > y {
			total += 3
		}
	}
	return total
}
