const merge = arr => {
	for (let i = 1, j = 0; j < arr.length; ++i) {
		if (arr[i] < arr[j]) {
			[arr[i], arr[j]] = [arr[j], arr[i]]
		}
		if (i === arr.length - 1) {
			i = j
			j++
		}
	}
}
