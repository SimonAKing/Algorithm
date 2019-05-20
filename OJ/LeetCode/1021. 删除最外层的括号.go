package main

func removeOuterParentheses(S string) string {
	v := 0
	m := []int{0}
	l := len(S)
	for i, s := range S {
		switch string(s) {
		case "(":
			v++
		case ")":
			v--
		}
		if v == 0 {
			m = append(m, i)
			if i != l-1 {
				m = append(m, i+1)
			}
		}
	}
	r := ""
	ml := len(m)
	for i := 0; i < ml; i += 2 {
		r += S[m[i]+1:] + S[:m[i+1]]
	}
	return r
}


