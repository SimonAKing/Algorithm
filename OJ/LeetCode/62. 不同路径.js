// const uniquePaths = (m, n) => {
// 	let count = 0
// 	const walk = (x, y) => {
// 		if (x === m && y === n) {
// 			count++
// 			return
// 		}
// 		x + 1 <= m && walk(x + 1, y)
// 		y + 1 <= n && walk(x, y + 1)
// 	}

// 	walk(1, 1)

// 	return count
// }

const uniquePaths = (m, n) => {
	const G = Array.from({ length: n }, () => Array.from({ length: m }, () => 1))
	for (let i = 1; i < G.length; i++) {
		for (let j = 1; j < G[i].length; j++) {
			G[i][j] = G[i - 1][j] + G[i][j - 1]
		}
	}

	return G[n - 1][m - 1]
}
