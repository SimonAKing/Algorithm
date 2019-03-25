/* 我写的 */
const autoBind = function(bindedClass) {
	const isFunction = fn =>
		Object.prototype.toString.call(fn) === '[object Function]'

	const { setPrototypeOf, getPrototypeOf } = Object

	return function(...args) {

		setPrototypeOf(this, new bindedClass(...args))

		const prototype = getPrototypeOf(this)

		setPrototypeOf(
			prototype,
			new Proxy(getPrototypeOf(prototype), {
				get(target, _prototype) {
					if (isFunction(target[_prototype])) {
						return target[_prototype].bind(prototype)
					}
					return target[_prototype]
				}
			})
		)
	}
}

/* 大佬写的 */
{
	const autoBind = fn =>
		new Proxy(fn, {
			construct(target, args) {
				return new Proxy(new fn(...args), {
					get(target, key) {
						return typeof target[key] === 'function'
							? target[key].bind(target)
							: target[key]
					}
				})
			}
		})
}
