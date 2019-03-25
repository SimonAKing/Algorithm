const trimWhenOne = value => value === 1 ? '' : value === -1 ? '-' : value

const factorial = (value, total = 1) =>
	value <= 1 ? total : factorial(value - 1, total * value)

const expand = expr => {
	let [op1, coefficient, variable, op2, constant, power] = expr
		.match(/(\W)(\d*)(\w)(\W)(\d+)..(\d+)/)
		.slice(1)
	power = +power
	if (!power) {
		return '1'
	}

	if (power === 1) {
		return expr.match(/\((.*)\)/)[1]
	}

	coefficient =
		op1 === '-'
			? coefficient
				? -coefficient
				: -1
			: coefficient
				? +coefficient
				: 1
	constant = op2 === '-' ? -constant : +constant

	const factorials = Array.from({ length: power + 1 }, (_,i) => factorial(i))

	let result = ''
	for (let i = 0, p = power; i <= power; ++i, p = power - i) {
		let judge =
			factorials[power] / (factorials[i] * factorials[p]) *
			(coefficient ** p * constant ** i)
		if (!judge) {
			continue
		}
		result += p
			? trimWhenOne(judge) + variable + (p === 1 ? '' : `^${p}`)
			: judge
		result += '+'
	}
	return result.replace(/\+\-/g, '-').replace(/\+$/, '')
}
