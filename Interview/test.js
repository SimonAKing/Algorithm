Promise.resolve(1).then(v => {
	console.log(v)
	// return v + 1
}).then(v => {
	console.log(v)
})

Promise.reject('error').then(() => { }, reason => {
	console.log(reason)
	// return reason + 1
	return Promise.reject(1)
}).then(() => { }, reason => {
	console.log(reason)
	// return reason + 1
	// return Promise.reject(2)
})
