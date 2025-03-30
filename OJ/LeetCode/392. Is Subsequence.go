package leetcode

import "regexp"

func isSubsequence(s string, t string) bool {
	regex := ".*"
	for _, i := range s {
		regex += string(i) + ".*"
	}
	matched, _ := regexp.MatchString(regex, t)
	return matched
}
