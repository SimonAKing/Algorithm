const fetch = url => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(url)
		})
	})
}

let p = Promise.race([
	fetch('/resource-that-may-take-a-while'),
	new Promise(function (resolve, reject) {
		setTimeout(() => reject(new Error('request timeout')), 500000)
	})
])
p.then(response => console.log(response))
p.catch(error => console.log(error))
