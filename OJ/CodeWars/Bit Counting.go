package kata

import (
	"strconv"
	"strings"
)

func CountBits(n uint) int {
	//bits.OnesCount(n)
	return strings.Count(strconv.FormatInt(int64(n),2),"1")
}
