/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = function (n) {
	const bound = n * 2
	const result = []

	const generateAll = (cursor, str, bound, result) => {
		if (str.length > bound / 2 && !str.includes('()')) {
			return
		}

		if (cursor === bound) {
			result.push(str)
			return
		}

		generateAll(cursor + 1, `${str}(`, bound, result)
		generateAll(cursor + 1, `${str})`, bound, result)
	}
	generateAll(0, '', bound, result)

	const isValid = str => {
		let balance = 0

		for (let i = 0; i < str.length; i++) {
			if (str[i] === '(') {
				balance++
			} else {
				balance--
			}
			if (balance < 0) {
				return false
			}
		}
		return balance === 0
	}

	return result.filter(isValid)
}

console.log(generateParenthesis(3))
