const maximalSquare = function (matrix) {
	let result = 0

	const getArea = (matrix, i, j) => {
		let k = 0
		while (k + i < matrix.length && k + j < matrix[0].length) {
			for (let p = j; p <= k + j; p++) {
				if (matrix[i + k][p] != 1) { return k * k }
			}

			for (let p = i; p < i + k; p++) {
				if (matrix[p][k + j] != 1) { return k * k }
			}
			k++
		}
		return k * k
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] != 1) { continue }
			result = Math.max(result, getArea(matrix, i, j))
		}
	}

	return result
}

console.log(maximalSquare([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]))
