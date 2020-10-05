const longestCommonSubsequence = (t1, t2) => {
	const n = t1.length
	const m = t2.length
	const dp = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0))

	for (let i = 1; i < n + 1; i++) {
		for (let j = 1; j < m + 1; j++) {
			if (t1[i - 1] === t2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
	}

	return dp[n][m]
}

console.log(longestCommonSubsequence('abcde', 'ace') === 3)
// console.log(longestCommonSubsequence('abc', 'abc') === 3)
// console.log(longestCommonSubsequence('abc', 'def') === 0)
// console.log(longestCommonSubsequence('bl', 'yby') === 1)
// console.log(longestCommonSubsequence('ezupkr', 'ubmrapg') === 2)
// console.log(longestCommonSubsequence('abcba', 'abcbcba') === 5)
