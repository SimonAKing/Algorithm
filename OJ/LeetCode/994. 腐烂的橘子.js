const orangesRotting = grid => {
	let minutes = 0
	const DRIECTION = [[0, 1], [0, -1], [1, 0], [-1, 0]]

	let isOver = !grid.toString().includes('1')
	const visited = {}

	while (!isOver) {
		const rottingOranges = []
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				const organe = grid[i][j]
				if (organe !== 2) { continue }

				if (visited[`${i}-${j}`]) { continue }
				visited[`${i}-${j}`] = true

				DRIECTION.forEach(([y, x]) => {
					const nextY = i + y
					const nextX = j + x
					if (nextY < 0 || nextY === grid.length) { return }
					if (nextX < 0 || nextX === grid[i].length) { return }
					if (grid[nextY][nextX] !== 1) { return }
					rottingOranges.push([nextY, nextX])
				})
			}
		}

		rottingOranges.forEach(([y, x]) => { grid[y][x] = 2 })
		isOver = !rottingOranges.length
		!isOver && minutes++
	}

	if (grid.toString().includes('1')) {
		return -1
	}
	return minutes
}
