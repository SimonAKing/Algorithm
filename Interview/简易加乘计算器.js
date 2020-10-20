const compute = formula => {
	const mulRegex = /(-?)\d+\*(-?)\d+/g
	while (mulRegex.test(formula)) {
		formula = formula.replace(mulRegex, s => s.split('*').map(e => Number.parseInt(e)).reduce((s, e) => s * e))
	}

	const addRegex = /(-?)\d+\+(-?)\d+/g
	while (addRegex.test(formula)) {
		formula = formula.replace(addRegex, s => s.split('+').map(e => Number.parseInt(e)).reduce((s, e) => s + e))
	}

	return formula
}

const computer = formula => {
	const bracketRegex = /(\([^()]+\))/g
	while (bracketRegex.test(formula)) {
		formula = formula.replace(bracketRegex, s => compute(s.slice(1, -1)))
	}

	return compute(formula)
}

console.log(computer('7*(-8+2)'))
console.log(computer('7'))
