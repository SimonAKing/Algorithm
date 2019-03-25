const spy = fn => {
	function _fn(...args) {
		return fn.apply(this, args)
	}
	_fn.calls = []
	return new Proxy(_fn, {
		apply(target, ctx, args) {
			const result = Reflect.apply(...arguments)
			target.calls.push({ result, args })
			return result
		}
	})
}
