package kata

func Decode(roman string) int {
	Roman := map[string]int{
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	}
	var total int
	var pre int
	for i, v := range roman {
		n := Roman[string(v)]
		if i == 0 {
			total = n
		} else {
			if n > pre {
				total += n - pre*2
			} else {
				total += n
			}
		}
		pre = n
	}
	return total
}
