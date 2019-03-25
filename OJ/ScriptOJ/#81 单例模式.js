const singletonify = originalClass => {
	let singleInstance = null
	return new Proxy(originalClass, {
		construct(target, args) {
			if (!singleInstance) {
				singleInstance = new target(...args)
			}
			return singleInstance
		}
	})
}
