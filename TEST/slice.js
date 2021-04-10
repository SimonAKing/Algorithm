const slice = (...elements) => {
	const data = [...elements]
	return new Proxy(data, {
		get(target, propKey, receiver) {
			if (!/^\d+:\d+$/.test(propKey)) {
				return Reflect.get(target, propKey, receiver)
			}
			const [start, end] = propKey.split(':').map(n => Number.parseInt(n))
			return target.slice(start, end)
		}
	})
}

const a = slice('x', 'y', 'z', 4, 5, 6)
console.log(a['2:3'])

const start = 0
const end = 10
for (let i = start; i <= end; i++) {
	for (let j = start; j <= end; j++) {
		Object.defineProperty(Array.prototype, `${i}:${j}`, {
			get: function() {
				return this.slice(i, j)
			}
		})
	}
}
