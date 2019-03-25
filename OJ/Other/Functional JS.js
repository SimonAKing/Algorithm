/* 例子: 利用函数式 对此函数进行改写 */
const nextCharForNumberString = str => {
	const trimed = str.trim()
	const number = Number.parseInt(trimed)
	const nextNumber = number + 1
	const result = String.fromCharCode(nextNumber)
	console.log(result)
}
nextCharForNumberString(' 64 ')

/* 利用 数组 map API 实现函数式 */
const arrFunc = t =>
	[t]
		.map(s => s.trim())
		.map(s => Number.parseInt(s))
		.map(s => s + 1)
		.map(s => String.fromCharCode(s))
		.map(s => console.log(s))

arrFunc(' 64 ')

const Box = s => ({
	map: f => Box(f(s))
})

Box(' 64 ')
	.map(s => s.trim())
	.map(s => Number.parseInt(s))
	.map(s => s + 1)
	.map(s => String.fromCharCode(s))
	.map(s => console.log(s))

/* --- */
Object.prototype.log = function() {
	console.log(this)
}

const fns = [x => x + 1, x => x + 2, x => x + 3]
const xs = [1, 2, 3]

fns.map(fn => xs.map(fn)).log()
const as = fns => xs => fns.map(f => xs.map(f))
as(fns)(xs).log()

const flatten = arr => arr.reduce((flat, next) => flat.concat(next), [])
/* const ap = fns => xs => flatten(as(fns)(xs)) */
const ap = fns => xs => flatten(fns.map(f => xs.map(f)))

ap(fns)(xs).log()

const lift = f => (head, tail) =>
	[tail].reduce((fns, xs) => ap(fns)(xs), head.map(f))

const add = x => y => x + y

lift(add)([1, 2, 3, 4], [4, 3, 2, 1]).log()

/* 一些辅助函数 */

/* 1. partial */

/* func.apply(null,[...org,...arg]) === func(...[...org,...arg]) */
const partial = (func, ...org) => (...arg) => func.apply(null, [...org, ...arg])

const sum = (a, b, c, d, e, f) => a + b + c + d + e + f
const test = partial(sum, 1, 2, 3)

console.log(test(4, 5, 6))

/* 2. chunk */
const chunk = (arr, size) =>
	arr.reduce((chunked, item) => {
		const last = chunked[chunked.length - 1]
		if (!last || last.length === size) {
			chunked.push([item])
		} else {
			last.push(item)
		}
		return chunked
	}, [])

chunk([1, 2, 3, 4, 5, 6], 2).log()
/* [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ] */

/* 3. wait */
const sleep = ms =>
	new Promise(resolve => setTimeout(resolve, ms))(async ms => {
		const label = 'test sleep func'
		console.time(label)
		await sleep(ms)
		console.timeEnd(label)
	})(5000)

/* 4. pipe */
const pipe = (...fns) => (...args) => fns.reduce((fx, fy) => fy(fx), ...args)
const asyncPipe = (...fns) => x => fns.reduce(async (y, f) => f(await y), x)

/* 5. trampoline 防止递归爆栈*/

const trampoline = fn => (...args) => {
	let result = fn(...args)
	while (typeof result === 'function') {
		result = result()
	}
	return result
}
