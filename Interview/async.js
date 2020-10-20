function* myGenerator() {
	let a = yield Promise.resolve(1)
	let b = yield Promise.resolve(2)
	let c = yield Promise.resolve(3)
	return a + b + c
}

const run = generator => {
	const gen = generator()
	return new Promise((resolve, reject) => {
		const next = newValue => {
			const { value, done } = gen.next(newValue)
			if (done) {
				return resolve(value)
			}

			return Promise.resolve(value).then(next)
		}

		next()
	})
}

run(myGenerator).then(res => {
	console.log('mygenerator函数的结果,', res) // mygenerator函数的结果, 6
})
