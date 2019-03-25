const maxSumOf = matrix => {
	const pos = []
	let MAX = -128

	matrix.forEach((arr, y) => {
		arr.forEach((v, x) => {
			if (v > 0) {
				pos.push({ pos: { x, y }, v })
			}
			MAX = Math.max(v, MAX)
		})
	})

	if (!pos.length || pos.length === 1) {
		return MAX
	}

	pos.sort(({ v: x }, { v: y }) => x > y)

	for (let i = 0; i < pos.length - 1; ++i) {
		const {
			pos: { x: x1, y: y1 }
		} = pos[i]
		const {
			pos: { x: x2, y: y2 }
		} = pos[i + 1]

		const sum = pointSum({ x1, y1 }, { x2, y2 })
	}
}

const HelloWorld = 'HelloWorld'

console.log(HelloWorld)
