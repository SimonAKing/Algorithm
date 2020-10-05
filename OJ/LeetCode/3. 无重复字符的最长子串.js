/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
	let result = 0
	const arr = []
	for (let i = 0; i < s.length; i++) {
		const char = s[i]
		const index = arr.indexOf(char)
		if (index !== -1) {
			arr.splice(0, index + 1)
		}
		arr.push(char)
		result = Math.max(result, arr.length)
	}
	return result
}
