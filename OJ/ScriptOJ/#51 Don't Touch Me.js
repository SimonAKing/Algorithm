const tomy = new Proxy({}, {
	set() {
		console.log('Don\'t Touch Me.')
	},
	defineProperty() {
		console.log('Don\'t Touch Me.')
	},
	deleteProperty() {
		console.log('Don\'t Touch Me.')
	}
})
