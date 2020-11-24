export function cleanString(s: string) {
	const re: RegExp = /([^#]{1}#{1})/gi

	while (re.test(s)) {
		s = s.replace(re, '')
	}
	return s.replace(/^#+/, '')
}

console.log(cleanString('7q####L'))

/*
export function cleanString(s: string) {
  return Array.from(s).reduce((a, b) => b == '#'? a.slice(0,-1) : a.concat(b), '')
}
*/
