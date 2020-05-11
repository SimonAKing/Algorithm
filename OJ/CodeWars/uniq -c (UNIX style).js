function uniq_c(a) {
	return !a.length ? [] : a.reduce((acc, x) => {
		const last = acc[acc.length - 1]
		if (last[0] == x) { last[1]++ } else { acc.push([x, 1]) }
		return acc
	}, [[a[0], 0]])
}
