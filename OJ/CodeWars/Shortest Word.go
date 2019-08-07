package kata

import "strings"

func FindShort(s string) int {
 r := 99999
 for _, t := range strings.Split(s, " ") {
	l := len(t)
	if l < r {
	 r = l
	}
 }


 return r
}
