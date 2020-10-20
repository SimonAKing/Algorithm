function _new(constructor, ...args) {
	const object = {}
	object.prototype = Object.create(constructor.prototype)
	const result = constructor.apply(object, args)
	return result instanceof Object ? result : object
}

// 如果 构造函数 返回了一个对象, 那么实例化的对象就是返回的对象
// 如果返回的是基本类型, 则可以忽视
