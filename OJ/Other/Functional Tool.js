/* -1. flatten */
export const flatten = arr => arr.reduce((flat, next) => flat.concat(next), [])

/* 0. lift */
const ap = fns => xs => flatten(fns.map(f => xs.map(f)))

// const lift = f => (head, ...tail) => tail.reduce((fns, xs) => ap(fns)(xs), head.map(f))
export const lift = f => (head, tail) => ap(head.map(f))(tail)

/* 1. partial */
/* func.apply(null,[...org,...arg]) === func(...[...org,...arg]) */
export const partial = (func, ...org) => (...arg) =>
	func.apply(null, [...org, ...arg])

/* 2. chunk */
export const chunk = (arr, size) =>
	arr.reduce((chunked, item) => {
		const last = chunked[chunked.length - 1]
		if (!last || last.length === size) {
			chunked.push([item])
		} else {
			last.push(item)
		}
		return chunked
	}, [])

/* 3. wait */
export const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

/* 4. pipe */
export const pipe = (...fns) => (...args) =>
	fns.reduce((fx, fy) => fy(fx), ...args)
export const asyncPipe = (...fns) => x =>
	fns.reduce(async (y, f) => f(await y), x)

/* 5. trampoline 防止递归爆栈*/
export const trampoline = fn => (...args) => {
	let result = fn(...args)
	while (typeof result === 'function') {
		result = result()
	}
	return result
}
