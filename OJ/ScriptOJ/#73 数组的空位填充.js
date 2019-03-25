const fillEmpty = arr => {
	const str = arr.map(el => `${el}`)
	for (let i = 0; i < str.length; ++i) {
		if (!str[i]) {
			arr[i] = 'Hello'
		}
	}
}
