const unfold = (func, seed) => {
	const go = (seed, arr, res = func(seed)) =>
		res ? go(res[1], [...arr, res[0]]) : arr
	return go(seed, [])
}

const range = (end, start = 0, step = 1) =>
	unfold(val => val <= end && [val, val + step], start)

console.log(range(5))
