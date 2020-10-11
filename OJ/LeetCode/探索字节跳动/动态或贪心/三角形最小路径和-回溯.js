const minimumTotal = triangle => {
	let result = Infinity
	const visited = {}

	const dfs = (x, y, sum) => {
		const key = `x:${x}-y:${y}`
		if (visited[key] && sum >= visited[key]) { return }
		visited[key] = sum
		if (y + 1 === triangle.length) {
			result = Math.min(result, sum)
			return
		}
		if (x === triangle[y + 1].length) { return }
		dfs(x, y + 1, sum + triangle[y + 1][x])
		if (x + 1 === triangle[y + 1].length) { return }
		dfs(x + 1, y + 1, sum + triangle[y + 1][x + 1])
	}

	dfs(0, 0, triangle[0][0])

	return result
}
