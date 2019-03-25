// Helper functions
const flatten = arr => arr.reduce((flat, next) => flat.concat(next), [])

const ap = fns => xs => flatten(fns.map(f => xs.map(f)))

const lift = f => (head, ...tail) =>
	tail.reduce((fns, xs) => ap(fns)(xs), head.map(f))

function partial(func, argArr) {
	return function() {
		const allArguments = argArr.concat(Array.prototype.slice.call(arguments))
		return func.apply(this, allArguments)
	}
}

const chunk = (array, size) =>
	array.reduce((chunked, item) => {
		const last = chunked[chunked.length - 1]
		if (!last || last.length === size) {
			chunked.push([item])
			return chunked
		}
		last.push(item)
		return chunked
	}, [])

const asyncPipe = (...fns) => x => fns.reduce(async (y, f) => f(await y), x)

const wait = async ms => new Promise(resolve => setTimeout(resolve, ms))


const itemsArr = Array.from(document.querySelectorAll('#list > li > span'))
const colorArr = ['red', '#ffa600', '#224de3', '#eee']
const timeArr = [[0, 1000], [1, 1500], [2, 1000], [3, 1500]]

const setColor = async (node, color, time) => {
	const _time = time[1]
	await wait(_time)
	node.style.backgroundColor = color
}

const combine = node => color => time =>
	colorArr.indexOf(color) === time[0] && [node, color, time]

const tasks = lift(combine)(itemsArr, colorArr, timeArr)
	.filter(Boolean)
	.map(comb => partial(setColor, comb))

const chunkedTasks = chunk(tasks, 4)

let it = chunkedTasks[Symbol.iterator]()
async function run(
	t1 = 1000,
	t2 = 1000,
	t3 = 1000,
	t4 = 1000,
	t5 = 1000,
	t6 = 1000
) {
	await asyncPipe(...it.next().value)()
	await wait(t1)
	await asyncPipe(...it.next().value)()
	await wait(t2)
	await asyncPipe(...it.next().value)()
	await wait(t3)
	await asyncPipe(...it.next().value)()
	await wait(t4)
	await asyncPipe(...it.next().value)()
	await wait(t5)
	await asyncPipe(...it.next().value)()
	await wait(t6)
	it = chunkedTasks[Symbol.iterator]()
	run(t1, t2, t3, t4, t5, t6)
}

run(2000, 3000, 1500, undefined, 3000)
