String.prototype.count = function(letter) {
	return [...this].reduce((n, l) => n + (l === letter ? 1 : 0), 0)
}

const isAnagram = (s, t) => {
	const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCodePoint(i + 97))
	return alphabet.every(letter => s.count(letter) === t.count(letter))
}
