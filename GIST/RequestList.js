const getRequestWithLimit = limit => {
	let count = 0
	const blockQueue = []

	return async request => {
		count++
		if (count > limit) {
			await new Promise(resolve => blockQueue.push(resolve))
		}
		try {
			return await request()
		} catch (error) {
			return Promise.reject(error)
		} finally {
			count--
			blockQueue.length && blockQueue.shift()()
		}
	}
}

const sleepByAsync = ms => new Promise(r => { setTimeout(r, ms) })

const fetch1 = async () => {
	console.log('fetch1 start')
	await sleepByAsync(1000)
	console.log('fetch1 end')
}
const fetch2 = async () => {
	console.log('fetch2 start')
	await sleepByAsync(2000)
	console.log('fetch2 end')
}
const fetch3 = async () => {
	console.log('fetch3 start')
	await sleepByAsync(3000)
	console.log('fetch3 end')
}

const requestWithLimit = getRequestWithLimit(2)

requestWithLimit(fetch1)
requestWithLimit(fetch2)
requestWithLimit(fetch3)

// 打印结果如下:
// fetch1 start
// fetch2 start
// fetch1 end
// fetch3 start
// fetch2 end
// fetch3 end
