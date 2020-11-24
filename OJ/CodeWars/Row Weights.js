function rowWeights(arr) {
	return arr.reduce((r, e, i) => (r[i % 2] += e, r), [0, 0])
}

console.log(rowWeights([13, 27, 49]))
