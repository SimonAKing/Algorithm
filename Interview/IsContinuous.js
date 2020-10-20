function isStraight(numbers) {
	numbers.sort((a, b) => a - b)

	let range = 0
	let countOfKing = 0
	for (let i = 0; i < numbers.length - 1; i++) {
		const isKing = numbers[i] === 0
		if (isKing) {
			countOfKing++
		}

		if (!isKing && numbers[i] === numbers[i + 1]) {
			return false
		}

		if (!isKing) {
			range += numbers[i + 1] - numbers[i] - 1
		}
	}

	return countOfKing >= range
}
