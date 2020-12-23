const permutation = s => {
	const result = []
	const arr = [...s]

	// a ab abc
	const permutate = (current, visited, isOver, callback) => {
		if (isOver(current)) {
			callback(current)
			return
		}

		arr.forEach((letter, index) => {
			if (visited.includes(index)) { return }

			permutate(current + letter, [...visited, index], isOver, callback)
		})
	}

	permutate('', [], current => current.length === s.length, current => { result.push(current) })
	return result
}

// a b c
// a c b

const result = permutation('abc')

console.log(result)
