export function binaryToString(binary: string) {
	let result = ''
	for (let i = 0; i < binary.length; i += 8) {
		result += String.fromCharCode(
			binary.slice(i, i + 8).split('').reverse().reduce((r, l, i) => l === '0' ? r : r + 2 ** i, 0)
		)
	}
	return result
}

binaryToString('01100001')

// clever!
/*
const sizeRegex: RegExp = /\d{1,8}/g;

export function binaryToString(binary: string) : string {
  return String.fromCharCode(...(binary.match(sizeRegex) || []).map(x => parseInt(x,2)!))
}

*/
