const lengthOfLongestSubstring = s => {
	let result = 0
	let current = ''
	for (let i = 0; i < s.length; i++) {
		current += s[i]
		const index = current.indexOf(s[i])
		if (index !== current.length - 1) {
			current = current.slice(index + 1)
		}
		result = Math.max(result, current.length)
	}

	return result
}

console.log(lengthOfLongestSubstring('aabaab!bb'))
