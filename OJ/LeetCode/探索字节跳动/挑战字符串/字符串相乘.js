const multiply = (num1, num2) => {
	if (num1.length + num2.length < 15) {
		return (Number.parseInt(num1) * Number.parseInt(num2)).toString()
	}
	const n1 = [...`${num1}`].map(e => Number.parseInt(e))
	const n2 = [...`${num2}`].map(e => Number.parseInt(e))

	let result = ''
	let curry = 0
	const nums = []

	for (let i = n1.length - 1; i >= 0; i--) {
		let num = '0'.repeat(n1.length - 1 - i)

		const a = n1[i]
		for (let j = n2.length - 1; j >= 0; j--) {
			const b = n2[j]

			const mul = (a * b) + curry
			num = (mul % 10) + num
			curry = Math.floor(mul / 10)
		}
		if (curry) {
			num = curry + num
		}
		nums.push(num)
		curry = 0
	}

	const maxLength = Math.max(...nums.map(({ length }) => length))

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
