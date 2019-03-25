reverse = a => [...a].map(a.pop, a)

reverse = a => a.map(a.pop, [...a])

/**
 * let a = [1,2,3,4,5,6]
 *
 * a.map(a.pop,arr)
 *(6) [6, 5, 4, empty × 3]
 */

Array.prototype._map = function(func, that) {
	let res = this
	for (let i = 0; i < res.length; ++i) {
		console.log(res.length)
		func.call(that)
	}
	return res
}

let a = [1, 2, 3, 4, 5]

console.log(a._map(a.pop, a))
