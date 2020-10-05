const STATUS = {
	PENDING: 'PENDING',
	FULFILLED: 'FULFILLED',
	REJECTED: 'REJECTED',
}

function resolvePromise(x, nextPromise, resolve, reject) {
	if (x === nextPromise) {
		// x 和 nextPromise 指向同一对象，循环引用抛出错误
		return reject(new TypeError('循环引用'))
	} else if (x && (typeof x === 'object' || typeof x === 'function')) {
		// x 是对象或者函数

		let called = false // 避免多次调用
		try {
			let then = x.then // 判断对象是否有 then 方法
			if (typeof then === 'function') {
				// then 是函数，就断定 x 是一个 Promise（根据Promise A+规范）
				then.call(
					x,
					function (y) {
						// 调用返回的promise，用它的结果作为下一次then的结果
						if (called) return
						called = true
						resolvePromise(y, nextPromise, resolve, reject) // 递归解析成功后的值，直到它是一个普通值为止
					},
					function (r) {
						if (called) return
						called = true
						reject(r) // 取then时发生错误了
					}
				)
			} else {
				resolve(x) // 此时 x 就是一个普通对象
			}
		} catch (e) {
			reject(e)
		}
	} else {
		// x 是原始数据类型 / 没有返回值，这里即是undefined
		resolve(x)
	}
}

class Promise {
	constructor(executor) {
		this.status = STATUS.PENDING
		this.value = undefined // 成功的值
		this.reason = undefined // 失败原因
		this.onResolvedCallbacks = [] // 存放成功的回调
		this.onRejectedCallbacks = [] // 存放失败的回调

		const resolve = val => {
			if (this.status === STATUS.PENDING) {
				this.status = STATUS.FULFILLED
				this.value = val
				this.onResolvedCallbacks.forEach(fn => fn())
			}
		}

		const reject = reason => {
			if (this.status === STATUS.PENDING) {
				this.status = STATUS.REJECTED
				this.reason = reason
				this.onRejectedCallbacks.forEach(fn => fn())
			}
		}

		try {
			executor(resolve, reject)
		} catch (e) {
			console.log(e)
		}
	}

	then(onFulfilled, onRejected) {
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : x => x
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: err => {
					throw err
				}
		let nextPromise = new Promise((resolve, reject) => {
			if (this.status === STATUS.FULFILLED) {
				setTimeout(() => {
					try {
						let x = onFulfilled(this.value)
						resolvePromise(x, nextPromise, resolve, reject)
					} catch (e) {
						reject(e)
					}
				})
			}

			if (this.status === STATUS.REJECTED) {
				setTimeout(() => {
					try {
						let x = onRejected(this.reason)
						resolvePromise(x, nextPromise, resolve, reject)
					} catch (e) {
						reject(e)
					}
				})
			}
			if (this.status === STATUS.PENDING) {
				this.onResolvedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onFulfilled(this.value)
							resolvePromise(x, nextPromise, resolve, reject)
						} catch (e) {
							reject(e)
						}
					})
				})
				this.onRejectedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onRejected(this.reason)
							resolve(x)
						} catch (e) {
							reject(e)
						}
					})
				})
			}
		})
		return nextPromise
	}

	catch(err) {
		// 默认没有成功，只有失败
		return this.then(undefined, err)
	}

	static resolve(val) {
		return new Promise((resolve, reject) => {
			resolve(val)
		})
	}

	static reject(reason) {
		return new Promise((resolve, reject) => {
			reject(reason)
		})
	}
}

	Promise.prototype.finally = function (callback) {
	return this.then(
	data => {
	// 让函数执行，内部会调用方法，如果方法是promise需要等待它完成
	return Promise.resolve(callback()).then(() => data)
},
	err => {
	return Promise.resolve(callback()).then(() => {
	throw err
})
}
)
}

function isPromise(val) {
	return val && typeof val.then === 'function'
}

/**
 * Promise.all可以将多个Promise实例包装成一个新的Promise实例。
 * 成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。
 */
Promise.all = function (promises) {
	if (!Array.isArray(promises)) {
		throw new Error('Not a array')
	}
	return new Promise((resolve, reject) => {
		let result = []
		let times = 0 // 计数器
		function processData(index, val) {
			result[index] = val
			if (++times === promises.length) {
				resolve(result)
			}
		}
		for (let i = 0; i < promises.length; i++) {
			let p = promises[i]
			if (isPromise(p)) {
				// Promise对象
				p.then(data => {
					processData(i, data)
				}, reject)
			} else {
				processData(i, p) // 普通值
			}
		}
	})
}

/**
 * 在执行多个异步操作中，只保留取第一个执行完成的异步操作的结果，即是哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
 * 其他的方法仍在执行，不过执行结果会被抛弃。
 */

Promise.race = function (promises) {
	if (!Array.isArray(promises)) {
		throw new Error('Not a array')
	}
	return new Promise((resolve, reject) => {
		for (let p of promises) {
			resolve(p).then(
				value => {
					resolve(value)
				},
				reason => {
					reject(reason)
				}
			)
		}
	})
}

module.exports = Promise
