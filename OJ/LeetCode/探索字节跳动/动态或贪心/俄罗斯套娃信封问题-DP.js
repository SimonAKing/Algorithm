const maxEnvelopes = envelopes => {
	if (!envelopes.length) { return 0 }
	envelopes.sort((a, b) => a[0] - b[0])
	const dp = Array.from({ length: envelopes.length }, () => 1)

	for (let i = 1; i < envelopes.length; i++) {
		for (let j = i - 1; j >= 0; j--) {
			if (envelopes[j][1] >= envelopes[i][1] || envelopes[i][0] === envelopes[j][0]) {
				continue
			}
			dp[i] = Math.max(dp[i], dp[j] + 1)
		}
	}
	return Math.max(...dp)
}
