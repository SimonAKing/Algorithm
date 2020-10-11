const minimumTotal = triangle => {
	const dp = triangle[triangle.length - 1]

	for (let i = triangle.length - 2; i >= 0; i--) {
		for (let j = 0; j <= i; j++) {
			dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
		}
	}

	return dp[0]
}
