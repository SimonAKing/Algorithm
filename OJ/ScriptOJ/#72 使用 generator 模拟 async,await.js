const wrapAsync = generatorFn => (...args) => {
	const fn = generatorFn(...args)
	return new Promise(res => {
		const go = ({ value, done }) =>
			done ? res(value) : value.then(v => go(fn.next(v)))
		go(fn.next())
	})
}

/* 调用 wrapAsync 返回的函数所获得的 Promise 的 then 获得的数据 和 generator 返回的数据并不一致，你确定你 yield 出正确的数据了吗？ */

const getData = name => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`My name is ${name}`)
		}, 1000) // 模拟异步获取数据
	})
}

/* fn.next(value) 把上一次 (yield exp) 替换成 value , 并且继续向下执行*/
const run = wrapAsync(function*(lastName) {
	const data1 = yield getData(`Jerry ${lastName}`)
	const data2 = yield getData(`Lucy ${lastName}`)

	/* return 返回 {value:[data1, data2] , done: true} */
	return [data1, data2]
})

run('Green').then(val => {
	console.log(val) // => [ 'My name is Jerry Green', 'My name is Lucy Green' ]
})
