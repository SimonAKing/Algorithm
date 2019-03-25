const partition = arr => {
	let first = arr[(j = 0)]
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < first) {
			let t = arr[i]
			for (let l = i; l > j; l--) {
				arr[l] = arr[l - 1]
			}
			arr[j++] = t
		} else if (arr[i] === first && arr[i - 1] > first) {
			let t = arr[i]
			let l = i - 1
			for (; arr[l] > first; l--) {
				arr[l + 1] = arr[l]
			}
			arr[l] = t
		}
	}
}

