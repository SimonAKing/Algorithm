const shallowEqual = (x, y) => {
	const type = Object.prototype.toString.call(x)
	if (type !== Object.prototype.toString.call(y)) {
		return false
	}
	if (type === '[object Object]' || type === '[object Array]') {
		if (Object.keys(x).length !== Object.keys(y).length) {
			return false
		}
		for (const [key, value] of Object.entries(x)) {
			if (!Object.is(value, y[key])) {
				return false
			}
		}
		return true
	}
	return Object.is(x, y)
}
