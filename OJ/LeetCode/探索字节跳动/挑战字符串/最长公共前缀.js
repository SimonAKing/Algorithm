const longestCommonPrefix = strs => {
	if (!strs.length) { return '' }
	const minStrLength = Math.min(...strs.map(({ length }) => length))
	let index = 0
	while (index <= minStrLength && strs.every(str => str[index] === strs[0][index])) { index++ }
	return strs[0].slice(0, index)
}

longestCommonPrefix([])
