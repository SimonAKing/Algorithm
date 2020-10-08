const addStrings = (num1, num2) => {
	let result = ''
	let curry = 0

	while (num1.length < num2.length) { num1 = `0${num1}` }
	while (num2.length < num1.length) { num2 = `0${num2}` }

	let index = num1.length - 1
	while (index >= 0) {
		const a = Number.parseInt(num1[index])
		const b = Number.parseInt(num2[index])
		const sum = a + b + curry
		result = (sum % 10) + result
		curry = Math.floor(sum / 10)
		index--
	}
	if (curry !== 0) { result = `${curry}${result}` }
	return result
}
