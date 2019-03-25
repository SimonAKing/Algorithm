class ObserverableArray extends Array {
	constructor() {
		super()
		this.observerMethods = [
			'push',
			'pop',
			'shift',
			'unshift',
			'splice',
			'sort',
			'reverse'
		]
		this.observerMethods.forEach(method => {
			const _method = this[method]
			Object.defineProperty(this, method, {
				get() {
					console.log(method)
					return _method
				}
			})
		})
	}
}
