class RequestLimit {
	constructor(limit = 2) {
		this.limit = Number.parseInt(limit)
		this.blockQueue = []
		this.requestCount = 0
	}

	/**
	 * 请求
	 * @param {*} req
	 */
	async request(req) { // {2}
		if (!req) {
			throw new Error('req is required.')
		}
		if (Object.prototype.toString.call(req) !== '[object Function]') {
			throw new Error('Req must be a function.')
		}
		if (this.requestCount >= this.limit) { // {3}
			await new Promise(resolve => this.blockQueue.push(resolve)) // 阻塞队列增加一个 Pending 状态的 Promise
		}

		this.requestCount++ // {5}
		try {
			return await req()
		} catch (error) {
			return Promise.reject(error)
		} finally {
			this.requestCount--
			if (this.blockQueue.length) { // 每完成一个就从阻塞队列里剔除一个
				this.blockQueue[0]() // 将最先进入阻塞队列的 Promise 从 Pending 变为 Fulfilled
				this.blockQueue.shift()
			}
		}
	}
}
