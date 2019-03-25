const singleNumber = nums => {
	const hash = nums.reduce((h, e) => {
		h[e] = h[e] ? h[e] + 1 : 1
		return h
	}, {})
	for ([key, value] of Object.entries(hash)) {
		if (value === 1) {
			return +key
		}
	}
}

