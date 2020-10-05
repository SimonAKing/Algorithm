// 2. 实现大整数相加算法，两个数用字符串模拟函数原型：function add(a, b) {}

// const add = (a, b) => eval(`${a}n+${b}n`).toString()
// const add = (a, b) => (BigInt(a) + BigInt(b)).toString()

const isNumber = s => /^-?\d+$/.test(s)
const isNegative = s => /^-\d+$/.test(s)

const Relation = {
	GREATER: 0,
	SAME: 1,
	SMALLER: 2
}

const getRelation = (a, b) => {
	if (a.length > b.length) {
		return Relation.GREATER
	}

	if (a.length < b.length) {
		return Relation.SMALLER
	}

	for (let i = 0; i < a.length; i++) {
		const aValue = Number.parseInt(a[i])
		const bValue = Number.parseInt(b[i])
		if (aValue > bValue) {
			return Relation.GREATER
		}
		if (bValue > aValue) {
			return Relation.SMALLER
		}
	}
	return Relation.SAME
}

const add = (a, b) => {
	if (!isNumber(a) || !isNumber(b)) {
		throw new Error('the parameter must be a number.')
	}

	const isANegative = isNegative(a)
	const isBNegative = isNegative(b)
	const isAllPositive = !isANegative && !isBNegative
	if (isAllPositive) {
		return _absoluteAdd(a, b)
	}

	const isAllNegative = isANegative && isBNegative
	if (isAllNegative) {
		return `-${_absoluteAdd(a.slice(1), b.slice(1))}`
	}

	const isOnlyANegative = isANegative && !isBNegative
	if (isOnlyANegative) {
		const aValue = a.slice(1)
		const relation = getRelation(aValue, b)
		if (relation === Relation.GREATER) {
			return `-${_absoluteSub(aValue, b)}`
		}
		if (relation === Relation.SMALLER) {
			return _absoluteSub(b, aValue)
		}
		return 0
	}

	const isOnlyBNegative = !isANegative && isBNegative
	if (isOnlyBNegative) {
		const bValue = b.slice(1)
		const relation = getRelation(bValue, a)
		if (relation === Relation.GREATER) {
			return `-${_absoluteSub(bValue, a)}`
		}
		if (relation === Relation.SMALLER) {
			return _absoluteSub(a, bValue)
		}
		return 0
	}
}

const _absoluteAdd = (a, b) => {
	let curry = 0
	let result = ''

	while (a.length < b.length) {
		a = `0${a}`
	}

	while (b.length < a.length) {
		b = `0${b}`
	}

	let l = b.length - 1

	while (l >= 0) {
		const n = Number.parseInt(a[l])
		const m = Number.parseInt(b[l])
		const sum = n + m + curry
		curry = Math.floor(sum / 10)
		result += sum % 10
		l--
	}

	if (curry) { result += curry }

	return result.split('').reverse().join('')
}

// NOTE: a 一定是 b 大的
const _absoluteSub = (a, b) => {
	let result = ''
	let borrow = 0
	while (b.length < a.length) {
		b = `0${b}`
	}

	let l = b.length - 1
	while (l >= 0) {
		let n = Number.parseInt(a[l]) - borrow
		borrow = 0
		const m = Number.parseInt(b[l])
		if (n < m) {
			n += 10
			borrow = 1
		}
		result += n - m
		l--
	}

	return result.split('').reverse().join('').replace(/^0+/, '')
}

console.log(add('12', '133'))

console.log(`add('123', '23') === '146' => `, add('123', '23') === '146')
console.log(`add('999', '1') === '1000' => `, add('999', '1') === '1000')
console.log(`add('123', '123') === '246' => `, add('123', '123') === '246')
console.log(add('999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', '1') === '1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000')

console.log(`add('-123', '-23') === '-146' => `, add('-123', '-23') === '-146')
console.log(`add('-4343', '-1') === '-4344' => `, add('-4343', '-1') === '-4344')
console.log(`add('-99', '2') === '-97' => `, add('-99', '2') === '-97')
console.log(`add('7', '-2') === '5' => `, add('7', '-2') === '5')
console.log(`add('999', '-1000') === '-1' => `, add('999', '-1000') === '-1')

console.log(add('29', '-10') === '19')
console.log(add('19', '-10') === '9')
console.log(add('-999', '-1') === '-1000')
console.log(add('-9', '10') === '1')

console.log(add('-229', '230') === '1')
console.log(add('9', '0') === '9')
