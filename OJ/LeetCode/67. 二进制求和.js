const addBinary = (a, b) => {
	while (a.length < b.length) { a = `0${a}` }
	while (b.length < a.length) { b = `0${b}` }
	let result = ''
	let index = a.length - 1
	let curry = 0
	while (index >= 0) {
		const aValue = Number.parseInt(a[index])
		const bValue = Number.parseInt(b[index])
		const sum = aValue + bValue + curry
		result = (sum % 2) + result
		curry = Math.floor(sum / 2)
		index--
	}
	result = '1'.repeat(curry) + result
	return result
}
