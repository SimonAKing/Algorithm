const quickSort = a => {
	if (!a.length) { return [] }

	return [
		...quickSort(a.filter(e => e < a[0])),
		...a.filter(e => e === a[0]),
		...quickSort(a.filter(e => e > a[0]))]
}
