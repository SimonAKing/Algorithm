setTimeout(() => {
	console.log('1')
	new Promise((resolve, reject) => {
		console.log('1-1')
		resolve()
	}).then(() => {
		console.log('1-2')
		Promise.resolve().then(() => {
			console.log('1-3')
		}).then(() => {
			setTimeout(() => {
				console.log('1-4')
				new Promise((r, w) => {
					console.log('33')
					r()
				}).then(wwww => {
					console.log('we')
				})
			})
		})
	})
}, 0)

setTimeout(() => {
	console.log('2')
	new Promise((resolve, reject) => {
		console.log('2-1')
		resolve()
	}).then(() => {
		console.log('2-2')
		Promise.resolve().then(() => {
			console.log('2-3')
		})
	})
}, 1)
Promise.resolve().then(() => {
	console.log('111')
}).then(() => {
	console.log('222')
})
setTimeout(() => {
	console.log('end')
})
console.log('start')

;(async () => {
	console.log('async-start')
	await Promise.resolve()
	console.log('async-end')
})()
