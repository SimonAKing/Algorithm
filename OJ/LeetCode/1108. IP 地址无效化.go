package _108__IP_地址无效化

import (
	"fmt"
	"strings"
)

func defangIPaddr(address string) string {
	//return strings.ReplaceAll(address,".","[.]")
	return strings.Replace(address, ".", "[.]", -1)
}

func main() {
	fmt.Println(defangIPaddr("1.1.1.1"))
}
