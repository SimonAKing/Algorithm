const wordBreak = (s, words) => {
	const hash = words.reduce((h, e) => (h[e] = true, h), {})
	const visited = {}
	const canComposeWord = str => {
		if (!str || !str.length) { return true }
		if (hash[str]) { return true }
		if (visited[str.length] !== undefined) {
			return visited[str.length]
		}
		for (let i = 1; i < str.length; i++) {
			const word = str.slice(0, i)
			if (!hash[word]) { continue }

			const rest = str.slice(i)
			if (hash[rest]) { return true }
			visited[rest.length] = canComposeWord(rest)
			if (visited[rest.length]) { return true }
		}
		return false
	}
	return canComposeWord(s)
}

const word1 = ['good', 'bad', 'a', 'an', 'student', 'teacher']
const s1 = 'agoodteacher'

console.log(resolve(word1, s1))
