package kata

func Parse(data string) []int {
	r := []int{}
	v := 0
	for _, s := range data {
		switch string(s) {
		case "i":
			v++
		case "d":
			v--
		case "s":
			v *= v
		case "o":
			r = append(r, v)
		}
	}
	return r
}
