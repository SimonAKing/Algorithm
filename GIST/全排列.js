const permutate = (n, choices = ['A', 'B', 'C', 'D']) => {
	const result = []

	const recursion = path => {
		if (path.length === n) {
			result.push(path)
			return
		}

		choices.forEach(c => recursion(path + c))
	}

	recursion([])

	return result
}

console.log(permutate(4))
