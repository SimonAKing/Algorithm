const mergeSortedArray = (arr1, arr2) => {
	let i = 0
	let j = 0
	return Array.from({ length: arr1.length + arr2.length }, () => {
		if (i >= arr1.length) {
			return arr2[j++]
		}
		if (j >= arr2.length) {
			return arr1[i++]
		}
		if (arr1[i] < arr2[j]) {
			return arr1[i++]
		}
		return arr2[j++]
	})
}
