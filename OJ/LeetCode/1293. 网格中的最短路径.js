const shortestPath = (grid, k) => {
	let result = Infinity
	const visited = {}
	const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
	const walk = (x, y, k, steps) => {
		const key = `${x}-${y}`
		if (visited[key]) { return }
		if (steps >= result) { return }
		if (x === grid[0].length - 1 && y === grid.length - 1) {
			result = Math.min(result, steps)
			return
		}

		for (const [_x, _y] of direction) {
			const nextX = x + _x
			const nextY = y + _y
			if (nextX < 0 || nextY < 0 || nextX >= grid[0].length || nextY >= grid.length) {
				continue
			}
			const isObstacle = grid[nextY][nextX] === 1
			if (isObstacle && k <= 0) {
				continue
			}
			visited[key] = true
			walk(nextX, nextY, isObstacle ? k - 1 : k, steps + 1)
			if (grid[y][x] === 0) {
				visited[key] = false
			}
		}
	}

	walk(0, 0, k, 0)

	return result === Infinity ? -1 : result
}
