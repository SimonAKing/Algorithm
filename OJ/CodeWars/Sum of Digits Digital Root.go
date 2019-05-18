package kata

func ParseDigital(n int, r []int) []int {
	r = append(r, n%10)
	if n >= 10 {
		return ParseDigital(n/10, r)
	}
	return r
}

func DigitalRoot(n int) int {
	d := ParseDigital(n, []int{})
	sum := 0
	for i := range d {
		sum += d[i]
	}
	if sum >= 10 {
		return DigitalRoot(sum)
	}
	return sum
}
