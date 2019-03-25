const isSameSet = (s1, s2) =>
	s1.size !== s2.size ? false : [...s1].every(el => s2.has(el))
