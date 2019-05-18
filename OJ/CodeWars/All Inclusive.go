package kata

func ContainAllRots(str string, arr []string) bool {
	Exist := map[string]bool{}
	for _, v := range arr {
		Exist[v] = true
	}
	return All(GetRotateStrings(str), func(s string) bool {
		return Exist[s]
	})
}

func GetRotateStrings(str string) []string {
	roteteStrs := make([]string, len(str))
	for i := range str {
		roteteStrs[i] = str[i:] + str[:i]
	}
	return roteteStrs
}

func All(arr []string, f func(string) bool) bool {
	for _, r := range arr {
		if !f(r) {
			return false
		}
	}
	return true
}
