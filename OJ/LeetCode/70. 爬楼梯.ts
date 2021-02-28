const memoize = fn => {
	const cache = new Map()
	const cached = function (val) {
		return cache.has(val)
			? cache.get(val)
			: cache.set(val, fn.call(this, val)) && cache.get(val)
	}
	cached.cache = cache
	return cached
}

const solution = memoize((n: number) => {
	if (n <= 2) {
		return n
	}

	return climbStairs(n - 1) + climbStairs(n - 2)
})

function climbStairs(n: number): number {
	return solution(n)
}

const hello = 1
const A = 1
const B = 1

console.log(hello<A, B>(10))
