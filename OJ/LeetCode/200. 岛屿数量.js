const numIslands = grid => {
	let islands = 0
	const DIRECTION = [[0, 1], [1, 0], [-1, 0], [0, -1]]
	const sign = (y, x) => {
		grid[y][x] = '_'
		for (const [_y, _x] of DIRECTION) {
			const nextY = y + _y
			const nextX = x + _x
			if (nextY < 0 || nextY >= grid.length) { continue }
			if (nextX < 0 || nextX >= grid[0].length) { continue }
			if (grid[nextY][nextX] != '1') { continue }
			sign(nextY, nextX)
		}
	}
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] != '1') { continue }
			islands++
			sign(i, j)
		}
	}

	return islands
}
