package kata

import (
	"regexp"
	"strings"
)

func ToCamelCase(s string) string {
	return regexp.MustCompile("[-_](.)").ReplaceAllStringFunc(s, func(w string) string {
		return strings.ToUpper(w[1:])
	})
}