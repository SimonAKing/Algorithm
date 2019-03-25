const flatten = arr =>
	arr.reduce(
		(flat, curr) => flat.concat(Array.isArray(curr) ? flatten(curr) : curr),
		[]
	)
