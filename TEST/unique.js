const unique1 = arr => [...new Set(arr)]
const unique2 = arr => Array.from(new Set(arr))

const unique3 = arr => arr.filter((el, index) => index === arr.indexOf(el))

const unique4 = arr => {
	const hash = new Map()

	return arr.reduce((a, e) => {
		if (hash.has(e)) { return a }
		hash.set(e, true)
		return [...a, e]
	}, [])
}

const unique5 = arr => {
	const result = []
	for (let i = 0; i < arr.length; i++) {
		if (!result.includes(arr[i])) result.push(arr[i])
	}
	return result
}
