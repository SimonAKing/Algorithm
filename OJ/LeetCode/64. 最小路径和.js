const minPathSum = function (grid) {
	const rowLength = grid.length
	const columnLength = grid[0].length

	let result = Number.MAX_VALUE
	const walk = (row, column, value) => {
		if (value >= result) { return }

		const nextRow = row + 1
		const nextColumn = column + 1
		if (nextRow === rowLength && nextColumn === columnLength) {
			result = Math.min(result, value)
			return
		}
		if (nextRow < rowLength) {
			walk(nextRow, column, value + grid[nextRow][column])
		}

		if (nextColumn < columnLength) {
			walk(row, nextColumn, value + grid[row][nextColumn])
		}
	}

	walk(0, 0, grid[0][0])
	return result
}

const r = minPathSum(
	[[1, 2], [1, 1]]
)

console.log(r)
