const getLevels = exp => {
	const parentheses = []
	let index = {}
	let level = 0
	for (let i = 0; i < exp.length; ++i) {
		if (exp[i] === '(') {
			index[++level] = i + 1
		} else if (exp[i] === ')') {
			const statement = exp.substring(index[level], i)
			parentheses.push({
				level,
				statement,
				start: index[level--] - 1,
				end: i + 1
			})
		}
	}
	return parentheses
}

const filterChar = exp =>
	exp
		.replace(/\s*/g, '')
		.replace(/\+\-/g, '-')
		.replace(/-{2}/g, '+')
		.replace(/\*\+/g, '*')
		.replace(/\/\+/g, '/')
		.replace(/\-\+/g, '-')
		.replace(/\(\+/g, '(')
		.replace(/\^\+/g, '')

const handleStr = (oldStr, newStr, start, end) => {
	return filterChar(oldStr.substring(0, start) + newStr + oldStr.substring(end))
}

const getNum = (str, idx, isPrev) => {
	const step = isPrev ? -1 : 1
	let isMinus = false
	for (let i = idx + step; i < str.length && i >= 0; i += step) {
		if (str[i] === '-') {
			if (
				i === 0 ||
				str[i - 1] === '(' ||
				str[i - 1] === '*' ||
				str[i - 1] === '/'
			) {
				if (isPrev) {
					return { num: +str.substring(i, idx), start: i }
				}
				isMinus = true
			}
		}
		if (
			str[i] === '*' ||
			str[i] === '+' ||
			str[i] === '/' ||
			str[i] === ')' ||
			(str[i] === '-' && !isMinus)
		) {
			const start = isPrev ? i + 1 : idx + 1
			const end = isPrev ? idx : i
			return { num: +str.substring(start, end), start, end }
		}
		if (
			(str[i] === '*' || str[i] === '+' || str[i] === '/' || str[i] === ')') &&
			isMinus
		) {
			const start = isPrev ? i + 1 : idx + 1
			const end = isPrev ? idx : i
			return { num: +str.substring(start, end), start, end }
		}
		if (i === 0) {
			return { num: +str.substring(i, idx), start: i }
		}
		if (i === str.length - 1) {
			return { num: +str.substring(idx + 1, i + 1), end: i + 1 }
		}
	}
}

const getJudge = op => {
	if (op === '*') {
		return (a, b) => a * b
	} else if (op === '/') {
		return (a, b) => a / b
	} else if (op === '+') {
		return (a, b) => a + b
	} else if (op === '-') {
		return (a, b) => a - b
	}
}

const handleJudge = (exp, idx) => {
	const { num: prevNum, start } = getNum(exp, idx, true)
	const { num: lastNum, end } = getNum(exp, idx, false)
	const judge = getJudge(exp[idx])
	return handleStr(exp, judge(prevNum, lastNum), start, end)
}

const handleStatement = exp => {
	for (let i = 0; i < exp.length; ++i) {
		if (exp[i] === '*' || exp[i] === '/') {
			exp = handleJudge(exp, i)
			i = -1
		}
	}
	for (let i = 0; i < exp.length; ++i) {
		if (exp[i] === '+') {
			exp = handleJudge(exp, i)
			i = -1
		} else if (exp[i] === '-') {
			if (i !== 0 && exp[i - 1] !== '(') {
				exp = handleJudge(exp, i)
				i = -1
			} else if (i === 0) {
				if (
					exp.indexOf('+', i + 1) +
						exp.indexOf('*', i + 1) +
						exp.indexOf('-', i + 1) +
						exp.indexOf('/', i + 1) ===
					-4
				) {
					return exp
				}
			} else if (exp[i - 1] === '(') {
				const bound = exp.indexOf(')', i)
				if (
					exp.indexOf('+', i + 1) > bound &&
					exp.indexOf('-', i + 1) > bound &&
					exp.indexOf('*', i + 1) > bound &&
					exp.indexOf('/', i + 1) > bound
				) {
					return exp
				}
			}
		}
	}
	return exp
}

const calc = exp => {
	exp = filterChar(exp)

	let levels = getLevels(exp).sort((a, b) => a.level < b.level)

	let maxLevel = levels.length ? levels[0].level : 0

	while (maxLevel) {
		for (let i = 0; i < levels.length; ++i) {
			const { level, statement, start, end } = levels[i]
			if (level !== maxLevel) {
				continue
			}
			exp = handleStr(exp, handleStatement(statement), start, end)
			levels = getLevels(exp)
			i = -1
		}
		maxLevel--
	}
	return +handleStatement(exp)
}
