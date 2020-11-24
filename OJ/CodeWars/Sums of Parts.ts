export function partsSums(ls: number[]): number[] {
	const result = [0]
	for (let i = ls.length - 1; i >= 0; i--) {
		const index = ls.length - i
		result[index] = ls[i] + result[index - 1]
	}

	return result.reverse()
}

console.log(partsSums([0, 1, 3, 6, 10]))
