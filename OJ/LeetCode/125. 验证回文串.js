const isPalindrome = s => {
	s = s.replace(/[\W_]/g, '').toLowerCase()
	return s.split('').reverse().join('') === s
}
