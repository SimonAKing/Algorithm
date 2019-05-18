package kata

import (
	"fmt"
	"strings"
)

func ArrayToString(numbers interface{}) string {
	return strings.Trim(strings.Replace(fmt.Sprint(numbers), " ", "", -1), "[]")
}

func CreatePhoneNumber(numbers [10]uint) string {
	str := ArrayToString(numbers)
	return fmt.Sprintf("(%s) %s-%s", str[0:3], str[3:6], str[6:10])
}
