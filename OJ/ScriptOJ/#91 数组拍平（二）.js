Array.prototype.flat = function () {
	return this.reduce((result, el) => {
		if (Array.isArray(el)) {
			result.push(...el.flat())
		} else {
			result.push(el)
		}
		return result
	}, [])
}
function* flatten2(arr) {
	arr = arr.flat()
	for (let index = 0; index < arr.length; index++) {
		yield arr[index]
	}
}

const numbers = flatten2([1, [[2], 3, 4], 5])
console.log('numbers.next().value:', numbers.next().value)
