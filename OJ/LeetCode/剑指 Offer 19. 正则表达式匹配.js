const isMatch = (s, p) => {
	return new RegExp(`^${p}$`).test(s)
}
