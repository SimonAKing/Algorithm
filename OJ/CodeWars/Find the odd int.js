const findOdd = A =>
	parseInt(
		Object.entries(
			A.reduce((map, v) => (map[v] ? map[v]++ : (map[v] = 1), map), {})
		).filter(([_, value]) => value % 2)[0][0]
	)
