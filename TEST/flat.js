const flatNative = arr => arr.flat(Infinity)

const flatRecursion = arr => [].concat(...arr.map(e => (Array.isArray(e) ? flatRecursion(e) : e)))

const flatReduce = arr => arr.reduce((a, e) => a.concat(Array.isArray(e) ? flatReduce(e) : e), [])

const flatForeach = arr => {
	const result = []
	const _ = arr => {
		arr.forEach(el => {
			if (Array.isArray(el)) {
				_(el)
				return
			}
			result.push(el)
		})
	}

	_(arr)

	return result
}
