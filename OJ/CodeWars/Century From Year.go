package kata

func century(year int) int {
	if year >= 1000 {
		if year%10 == 0 && year/10%10 == 0 {
			return year / 100
		}
		return year/100 + 1
	} else {
		return 1
	}

}
