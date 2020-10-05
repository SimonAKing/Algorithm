function curry(fn) {
	return function _(...args) {
		if (args.length >= fn.length) {
			return fn(...args)
		}
		return _.bind(this, ...args)
	}
}

const add = (a, b, c) => a + b + c

const curryAdd = curry(add)

const r = curryAdd(1)(2)(3)
console.log(r)
