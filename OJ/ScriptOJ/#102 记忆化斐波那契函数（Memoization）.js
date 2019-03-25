const fibonacci = n => {
	if (!fibonacci.cache) {
		const MAX_LENGTH = 1e4
		fibonacci.cache = [1, 1]
		for (let i = 2; i < MAX_LENGTH; ++i) {
			fibonacci.cache[i] = fibonacci.cache[i - 2] + fibonacci.cache[i - 1]
		}
	}
	return fibonacci.cache[n - 1]
}
