// https://www.codewars.com/kata/530e69ae72d6dfced0000a9e/train/javascript

const isBigCompute = (a, b) => a.length + b.length >= 15

function add(a, b) {
	if (!isBigCompute(a, b)) {
		return (Number.parseInt(a) + Number.parseInt(b)).toString()
	}
	let result = ''
	let curry = 0

	while (a.length < b.length) { a = `0${a}` }
	while (b.length < a.length) { b = `0${b}` }

	let index = a.length - 1
	while (index >= 0) {
		const aValue = Number.parseInt(a[index])
		const bValue = Number.parseInt(b[index])
		const sum = aValue + bValue + curry
		result = (sum % 10) + result
		curry = Math.floor(sum / 10)
		index--
	}
	if (curry !== 0) { result = `${curry}${result}` }
	return result
}

function subtract(a, b) {
	if (!isBigCompute(a, b)) {
		return (Number.parseInt(a) - Number.parseInt(b)).toString()
	}
	let result = ''
	let borrow = 0

	while (a.length < b.length) { a = `0${a}` }
	while (b.length < a.length) { b = `0${b}` }
	let index = a.length - 1

	while (index >= 0) {
		let aValue = Number.parseInt(a[index])
		let bValue = Number.parseInt(b[index])

		let currentBorrow = 0

		if (aValue < bValue + borrow) {
			aValue += 10
			currentBorrow++
		}

		const sub = aValue - bValue - borrow
		if (aValue >= bValue + borrow) { borrow = 0 }
		borrow += currentBorrow

		result = (sub % 10) + result
		index--
	}
	result = result.replace(/^0*/, '')
	return result.length ? result : '0'
}

function multiply(num1, num2) {
	if (!isBigCompute(num1, num2)) {
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

const RELATION = {
	SMALLER: 0,
	SAME: 1,
	GREATER: 2
}

function compare(a, b) {
	if (a.length < b.length) { return RELATION.SMALLER }
	if (a.length > b.length) { return RELATION.GREATER }

	let index = 0
	while (index < a.length) {
		const aValue = Number.parseInt(a[index])
		const bValue = Number.parseInt(b[index])

		if (aValue < bValue) {
			return RELATION.SMALLER
		}
		if (aValue > bValue) {
			return RELATION.GREATER
		}
		index++
	}

	return RELATION.SAME
}

function divide(a, b) {
	if (!isBigCompute(a, b)) {
		return Math.floor(Number.parseInt(a) / Number.parseInt(b)).toString()
	}
	if (b == '1') { return a }
	let relation = compare(a, b)

	if (relation === RELATION.SMALLER) { return '0' }
	if (relation === RELATION.SAME) { return '1' }

	let result = '1'
	if (a.length - b.length >= 2) {
		result += '0'.repeat(a.length - b.length)
	}

	let mul = multiply(b, result)
	relation = compare(a, mul)
	if (relation === RELATION.SMALLER) {
		result = result.slice(0, -1)
	}

	while (true) {
		const sub = subtract(a, mul)
		relation = compare(sub, b)
		if (relation === RELATION.SAME) {
			return add(result, '1')
		}
		if (relation === RELATION.SMALLER) {
			return result
		}

		result = add(result, '1')
		mul = multiply(b, result)
	}
}

const Test = {
	assertEquals: console.log
}

console.log('add')
Test.assertEquals(add('0', '1'), '1')
Test.assertEquals(add('1', '0'), '1')
Test.assertEquals(add('1', '1'), '2')
Test.assertEquals(add('123', '321'), '444')

console.log('substract')
Test.assertEquals(subtract('10', '9'), '1')
Test.assertEquals(subtract('45', '45'), '0')

console.log('multiply')
Test.assertEquals(multiply('0', '0'), '0')
Test.assertEquals(multiply('1', '0'), '0')
Test.assertEquals(multiply('0', '1'), '0')
Test.assertEquals(multiply('1', '1'), '1')
Test.assertEquals(multiply('123', '123'), '15129')

console.log('divide')
Test.assertEquals(divide('1', '1'), '1')
Test.assertEquals(divide('2', '1'), '2')
Test.assertEquals(divide('3', '2'), '1')
Test.assertEquals(divide('4', '5'), '0')
Test.assertEquals(divide('100', '11'), '9')

console.log('bignum')
Test.assertEquals(add('12345678901234567890',
	'12345678901234567890'),
	'24691357802469135780')

Test.assertEquals(subtract('24691357802469135780',
	'12345678901234567890'),
	'12345678901234567890')

Test.assertEquals(multiply('12345678901234567890',
	'12345678901234567890'),
	'152415787532388367501905199875019052100')

Test.assertEquals(divide('24691357802469135780',
	'12345678901234567890'),
	'2')

console.log('custom case')

Test.assertEquals(divide('99',
	'9'),
	'11')

	// 1 + 700 / 20
	// 720 20 36
