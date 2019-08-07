package main

func removeOuterParentheses(S string) (s string) {
	var v int
	for _,c := range S {
		if c == '(' {
			if v > 0 {
				s+=string(c)
			}
			v++
		}else{
			v--
			if v > 0 {
				s+=string(c)
			}
		}
	}

	return
}





