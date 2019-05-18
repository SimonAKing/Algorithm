package kata

import "regexp"

func GetCount(str string) (count int) {
	r := regexp.MustCompile("[aeiou]")
	vowels := r.FindAllString(str, -1)
	return len(vowels)
}
