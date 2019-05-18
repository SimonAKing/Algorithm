package kata

import (
	"fmt"
	"strconv"
	"strings"
)

func HighAndLow(in string) string {
	min, max := 9999, -9999
	for _, v := range strings.Split(in, " ") {
		i, _ := strconv.Atoi(v)
		if i < min {
			min = i
		}
		if i > max {
			max = i
		}
	}
	return fmt.Sprintf("%d %d", max, min)
}
