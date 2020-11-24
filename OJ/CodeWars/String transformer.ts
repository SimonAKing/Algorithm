export function stringTransformer(str: string) {
	return str.split(' ').reverse()
		.map(word => word.split('')
			.map(l => l.charCodeAt())
			.map(n => (n >= 65 && n <= 90) ? n + 32 : n - 32)
			.map(l => String.fromCharCode(l))
			.join('')).join(' ')
}
