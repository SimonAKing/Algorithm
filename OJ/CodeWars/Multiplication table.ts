export function multiplicationTable(size: number): number[][] {
	return Array.from({ length: size }, (_, i) => i + 1)
		.reduce((r, i) => ([...r, Array.from({ length: size }, (_, j) => (j + 1) * i)]), [])
}

console.log(multiplicationTable(1))
console.log(multiplicationTable(2))
console.log(multiplicationTable(3))
