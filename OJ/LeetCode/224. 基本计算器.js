// const calculate = s => {
// 	return eval(s)
// }

// const calculate = s => {
// 	return (new Function(`return ${s}`))()
// }

const calculate = s => {
	const compute = formula => {
		formula = formula.replace(/\s/g, '')
		const nums = []
		const signs = []
		let current = 0
		for (const letter of formula) {
			if (/\d/.test(letter)) {
				current = (current * 10) + Number.parseInt(letter)
				continue
			}
			nums.push(current)
			current = 0
			signs.push(letter)
		}
		nums.push(current)

		while (signs.length) {
			const a = nums.shift()
			const b = nums.shift()
			const op = signs.shift()
			if (op === '+') {
				nums.unshift(a + b)
			} else {
				nums.unshift(a - b)
			}
		}
		return nums[0]
	}

	const formulaRegex = /\([^()]+\)/g
	while (formulaRegex.test(s)) {
		s = s.replace(formulaRegex, formula => compute(formula.slice(1, -1)))
		s = s.replace(/--/g, '+')
	}
	return compute(s)
}

console.log(calculate('1 + 1'))
