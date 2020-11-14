const longestPalindrome = s => {
	let result = s[0] || ''
	for (let i = 0; i < s.length; i++) {
		for (let j = 1; j <= 2; j++) { // 偶数奇数回文串
			let left = i; let right = i + j
			while (left >= 0 && right < s.length && s[left] === s[right]) {
				left--
				right++ // 向外扩展直到两端不相同
			}
			let length = right - left - 1 // (right - 1) - (left + 1) + 1
			if (length > result.length) {
				result = s.substr(left + 1, length)
			}
		}
	}
	return result
}
