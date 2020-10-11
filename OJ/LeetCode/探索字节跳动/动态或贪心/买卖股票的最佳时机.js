const maxProfit = prices => {
	let result = 0

	for (let i = 0; i < prices.length - 1; i++) {
		const maxPrices = Math.max(...prices.slice(i + 1))
		if (maxPrices <= prices[i]) { continue }

		result = Math.max(result, maxPrices - prices[i])
	}

	return result
}
