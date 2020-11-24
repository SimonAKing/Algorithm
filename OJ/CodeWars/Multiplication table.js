function multiplicationTable(size) {
	return Array.from({ length: size }, (_, i) => i + 1)
		.reduce((r, i) => ([...r, Array.from({ length: size }, (_, j) => (j + 1) * i)]), [])
}
