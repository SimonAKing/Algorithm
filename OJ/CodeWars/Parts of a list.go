package kata

import (
	"fmt"
	"strings"
)

func PartList(arr []string) string {
	length := len(arr)
	var result string
	for i := 1; i < length; i++ {
		result += fmt.Sprintf("(%s, %s)", arr[:i], arr[i:])
	}
	return strings.Replace(strings.Replace(result, "[", "", -1), "]", "", -1)
}
