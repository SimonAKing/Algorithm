/* 自己写的 */
const runExpression = exp => {
	const op = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
		'*': (a, b) => a * b,
		'/': (a, b) => a / b
	}
	const getVar = text => {
		text = text.replace(/^\([\+|\-|\*|\/]\s|\)$/g, '')

		if (/^\d+\ \d+$/.test(text)) {
			return text.split(' ')
		}
		if (/^\d+\ \(.+\)$/.test(text)) {
			return [text, judge(text.match(/\(.+\)/)[0])]
		}
		if (/^\(.+\)\ \d+$/.test(text)) {
			return [judge(text.match(/\(.+\)/)[0]), text.match(/\d+$/)[0]]
		}

		let level = 0,
			start,
			result = []
		for (let i = 0; i < text.length; ++i) {
			if (text[i] === '(') {
				if (level === 0) {
					start = i
				}
				level++
			} else if (text[i] === ')') {
				level--
				if (level === 0) {
					result.push(judge(text.substr(start, i + 1)))
				}
			}
		}
		return result
	}
	const judge = equation => {
		const [_, symbol] = equation
		const [var1, var2] = getVar(equation).map(el => Number.parseFloat(el))
		return op[symbol](var1, var2)
	}

	const meetCondition = text => {
		let level = 0
		for (let i = 0; i < text.length; ++i) {
			if (text[i] === '(') {
				level++
			} else if (text[i] === ')') {
				level--
			}
			if (
				level < 0 ||
				(level === 0 && i !== text.length - 1) ||
				(i === text.length - 1 && level !== 0)
			) {
				return false
			}
		}
		if (
			!/^\([\+|\-|\*|\/]\s((\d+\s\d+)|(\d+\s\(.+\))|(\(.+\)\s\d+)|(\(.+\)\s\(.+\)))\)$/.test(
				text
			)
		) {
			return false
		}
		return true
	}

	return meetCondition(exp) ? judge(exp) : null
}

{
	function runExpression(exp) {
		if (!exp.startsWith('(')) {
			return null
		}
		const ops = {
			'+': (a, b) => a + b,
			'-': (a, b) => a - b,
			'*': (a, b) => a * b,
			'/': (a, b) => a / b
		}
		const stack = []
		const chars = exp.split('')
		while (chars.length) {
			let char = chars.shift()
			let num = ''
			while (char && char.match(/\d/)) {
				num += char
				char = chars.shift()
			}
			if (num) {
				stack.push(num * 1)
			}
			if (char === ')') {
				const op1 = stack.pop()
				const op2 = stack.pop()
				const operator = stack.pop()
				const leftParent = stack.pop()
				const op = ops[operator]
				if (
					typeof op1 !== 'number' ||
					typeof op2 !== 'number' ||
					leftParent !== '(' ||
					!op
				) {
					return null
				}
				stack.push(op(op2, op1))
			} else if (char && char.match(/\S/)) {
				stack.push(char)
			}
		}
		return stack.length !== 1 ? null : stack.pop()
	}
}

{
	class Stream {
		constructor(tokens) {
			this.tokens = tokens
			this.pos = 0
		}

		get next() {
			return this.tokens[this.pos++] || ''
		}

		cancel() {
			this.pos--
		}

		get done() {
			return this.pos >= this.tokens.length
		}

		get rest() {
			return this.tokens.slice(this.pos)
		}

		transaction(fn) {
			const rpos = this.pos
			const ret = fn()
			if (ret === failure) {
				this.pos = rpos
				return failure
			}
			return ret
		}
	}

	function preventRec(fn) {
		const stack = []
		return stream => {
			if (stack.includes(stream.pos)) {
				return ignore
			}
			stack.push(stream.pos)
			const ret = fn(stream)
			stack.pop()
			return ret
		}
	}

	const failure = Symbol('failure')
	const ignore = Symbol('ignore')

	const eq = str => stream =>
		stream.transaction(() => (stream.next == str ? ignore : failure))

	const re = regex => fn => stream =>
		stream.transaction(() => {
			const ret = stream.next.match(regex)
			if (!ret) return failure
			return fn(ret)
		})

	const chain = (...parsers) => fn => stream =>
		stream.transaction(() => {
			const arr = []
			for (const parser of parsers) {
				const result = parser(stream)
				if (result == failure) return failure
				if (result != ignore) arr.push(result)
			}
			return fn(...arr)
		})

	const choice = (...parsers) => stream => {
		for (const parser of parsers) {
			const result = parser(stream)
			if (result != failure) return result
		}
		return failure
	}

	let Parser
	Parser = (() => {
		const number = re(/^((\+|\-)?Infinity|\d+(\.\d+)?)$/)(x => ({
			op: 'imm',
			value: parseFloat(x[0])
		}))
		let expression
		expression = choice(
			chain(
				eq(`(`),
				re(/^[\+\-\*\/\%]$/)(x => x[0]),
				s => expression(s),
				s => expression(s),
				eq(`)`)
			)((op, a, b) => ({ op, a, b })),
			number
		)
		return expression
	})()

	const tokenizer = str =>
		str.match(/(\+|\-)?Infinity|\d+(\.\d+)?|[\(\)\+\-\*\/]/g)

	const runExpression = exp => {
		const tokens = tokenizer(exp)
		if (!tokens) return null
		const stream = new Stream(tokenizer(exp))
		console.log(tokenizer(exp))
		const ast = Parser(stream)
		console.log(ast)
		if (stream.rest.length || ast.op == 'imm') return null
		const opmap = {
			imm: node => exec => node.value,
			'+': node => exec => exec(node.a) + exec(node.b),
			'-': node => exec => exec(node.a) - exec(node.b),
			'*': node => exec => exec(node.a) * exec(node.b),
			'/': node => exec => exec(node.a) / exec(node.b),
			'%': node => exec => exec(node.a) % exec(node.b)
		}
		let walk
		walk = node => opmap[node.op](node)(walk)
		return walk(ast)
	}
}
