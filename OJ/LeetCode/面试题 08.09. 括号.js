const generateParenthesis = function (n) {
	const result = []

	const generateAll = (str, open, close) => {
		if (str.length === n * 2) {
			result.push(str)
			return
		}

		if (open < n) {
			generateAll(`${str}(`, open + 1, close)
		}

		if (close < open) {
			generateAll(`${str})`, open, close + 1)
		}
	}
	generateAll('', 0, 0)

	return result
}
