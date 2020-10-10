const multiply = (num1, num2) => {
	if (num1 == 0 || num2 == 0) { return '0' }
	const n1 = [...`${num1}`].map(e => Number.parseInt(e))
	const n2 = [...`${num2}`].map(e => Number.parseInt(e))

	let result = ''
	const nums = []

	for (let i = n1.length - 1; i >= 0; i--) {
		const preBase = '0'.repeat(n1.length - 1 - i)
		const a = n1[i]
		for (let j = n2.length - 1; j >= 0; j--) {
			const b = n2[j]
			const base = preBase + '0'.repeat(n2.length - 1 - j)
			nums.push((a * b) + base)
		}
	}

	const maxLength = Math.max(...nums.map(({ length }) => length))

	let curry = 0
	for (let i = 1; i <= maxLength; i++) {
		const sum = curry + nums.map(n => n[n.length - i] || 0).map(e => Number.parseInt(e)).reduce((s, e) => s + e)
		result = (sum % 10) + result
		curry = Math.floor(sum / 10)
	}

	if (curry) {
		result = (curry % 10) + result
	}

	return result.replace(/^0+/, '0')
}
