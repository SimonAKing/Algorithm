export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
	if (!arrayOfArrays || !arrayOfArrays.length) { return 0 }
	if (arrayOfArrays.some(e => !e || !e.length)) { return 0 }

	const lengths = arrayOfArrays.map(({ length }) => length)
	const hash = lengths.reduce((o, v) => (o[v] = true, o), {})
	const minLength = Math.min(...lengths)

	return Array.from({ length: lengths.length + 1 }, (_, i) => minLength + i).find(e => !hash[e])
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]))
console.log(getLengthOfMissingArray([[0, 0],
[4, 3, 4],
[]]))
