const resolve = A => {
	const compute = n => {
		const n2 = n ** 2 // Math.pow
		const n3 = n2 * n
		return n3 * (n2 + 1)
	}
	const same = n => Math.abs(n - A) <= 0.001
	for (let i = 0; i <= A; i++) {
		if (same(compute(i), A)) {
			return i
		}
		// console.log(i)
		let k = i
		while (k < i + 1) {
			k += 0.00001
			console.log(k)
			if (same(compute(k), A)) {
				return k
			}
		}
	}
}

const r = resolve(666.666)

console.log(r)
