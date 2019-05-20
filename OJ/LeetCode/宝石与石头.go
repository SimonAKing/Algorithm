func numJewelsInStones(J string, S string) int {
	result := 0
	hash := make(map[interface{}] int)

	for _,c := range S{
		if _,ok := hash[c]; ok {
			hash[c] += 1
		}else {
			hash[c] = 1
		}
	}

	for _,c := range J {
		if _,ok := hash[c]; ok {
			result += hash[c]
		}
	}
	return result
}
