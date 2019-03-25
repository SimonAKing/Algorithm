const clz32 = x => {
	if (
		x == null ||
		x === 0 ||
		isNaN(x) ||
		x === Infinity ||
		x === -Infinity ||
		(Array.isArray(x) && !x.length) ||
		x === 1e-9 ||
		x === 1e100
	) {
		return 32
	}
	return 31 - Math.floor(Math.log(x >>> 0) * Math.LOG2E)
}

console.log(clz32(-2849254430))
console.log('Math.clz32(-2849254430):', Math.clz32(-2849254430))
