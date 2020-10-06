// Play with the function mystery(x) in your test cases.
// When you think you've solved the mystery,
// implement the following function as your answer

function solved(str) {
	const arr = str.split('')
	if (arr.length % 2 === 1) {
		arr.splice((arr.length / 2), 1)
	}

	return arr.sort().join('')
}
