// https://www.codewars.com/kata/530e69ae72d6dfced0000a9e/train/javascript

function add(a, b) {
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

function multiply(a, b) {
}

function divide(a, b) {

}

const Test = {
	assertEquals: console.log
}

Test.assertEquals(add('0', '1'), '1')
Test.assertEquals(add('1', '0'), '1')
Test.assertEquals(add('1', '1'), '2')
Test.assertEquals(add('123', '321'), '444')

Test.assertEquals(subtract('10', '9'), '1')
Test.assertEquals(subtract('45', '45'), '0')

Test.assertEquals(multiply('0', '0'), '0')
Test.assertEquals(multiply('1', '0'), '0')
Test.assertEquals(multiply('0', '1'), '0')
Test.assertEquals(multiply('1', '1'), '1')
Test.assertEquals(multiply('123', '123'), '15129')

Test.assertEquals(divide('1', '1'), '1')
Test.assertEquals(divide('2', '1'), '2')
Test.assertEquals(divide('3', '2'), '1')
Test.assertEquals(divide('4', '5'), '0')
Test.assertEquals(divide('100', '11'), '9')

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
