/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = function (n) {
	const result = []

	const generateAll = (cursor, str, open, close, length, result) => {
		if (cursor === length * 2) {
			result.push(str)
			return
		}

		if (open < length) {
			generateAll(cursor + 1, `${str}(`, open + 1, close, length, result)
		}

		if (close < open) {
			generateAll(cursor + 1, `${str})`, open, close + 1, length, result)
		}
	}
	generateAll(0, '', 0, 0, n, result)

	return result
}

console.log(generateParenthesis(3))
