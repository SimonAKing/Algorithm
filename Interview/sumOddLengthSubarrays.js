function sumOddLengthSubarrays(arr) {
	if (!Array.isArray(arr) || !arr.length) { return 0 }

	let result = arr.reduce((s, e) => s + e)
	let length = 3
	while (length <= arr.length) {
		for (let i = 0; i + length <= arr.length; i++) {
			result += arr.slice(i, i + length).reduce((s, e) => s + e)
		}
		length += 2
	}

	return result
}

// console.log(sumOddLengthSubarrays([1, 2]), 2)
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]), 58)
