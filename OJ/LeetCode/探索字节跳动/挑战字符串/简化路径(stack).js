const simplifyPath = path => {
	return `/${path
		.split('/')
		.filter(e => e && e !== '.')
		.reduce((stack, letter) => {
			if (letter === '..') {
				return stack.slice(0, -1)
			}
			return [...stack, letter]
		}, []).join('/')}`
}

console.log(simplifyPath('/../'))
