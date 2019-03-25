{
	const uniqueNums = (n, r = []) => {
		if (!n) {
			return r
		}
		const num = Math.floor(2 + Math.random() * 31)
		return r.includes(num) ? uniqueNums(n, r) : uniqueNums(n - 1, [num, ...r])
	}
}
{
	const uniqueNums = n =>
		[...new Array(31).keys()]
			.map(i => i + 2)
			.sort(() => Math.random() - Math.random())
			.slice(0, n)
}

{
	const uniqueNums = n =>
		Array.from({ length: 31 }, (v, i) => (v = i + 2))
			.sort(() => Math.random() - Math.random())
			.slice(0, n)
}

{
	const uniqueNums = n =>
		Array.from({ length: n }, (v, i) => (v = ((i + i ** 3) % 32) + 2))
}
