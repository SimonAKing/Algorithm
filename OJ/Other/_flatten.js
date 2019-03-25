const flatten = arr =>
	arr.reduce(
		(flat, curr) => flat.concat(Array.isArray(curr) ? flatten(curr) : curr),
		[]
	)


const nestedArr = [1, 2, [3, 4, [5, 6]]]

console.log(flatten(nestedArr))
