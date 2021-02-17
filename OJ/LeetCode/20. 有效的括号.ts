function isValid(s: string): boolean {
	const regex: RegExp = /(\(\)|\[]|{})/g
	while (regex.test(s)) {
		s = s.replace(regex, '')
	}
	return s === ''
}
