/**
 * @param {number} n
 * @return {number}
 */
const sumNums = function (n, result = 0) {
	if (n === 0) {
		return result
	}

	return sumNums(n - 1, result + n)
}
