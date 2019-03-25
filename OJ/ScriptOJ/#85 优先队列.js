class PriorityQueue {
	constructor() {
		this.queue = []
		this._maxValueIndex = 0
	}
	add(el) {
		if (el > this.queue[this._maxValueIndex] || 0) {
			this._maxValueIndex = this.queue.length
		}
		this.queue.push(el)
	}

	remove() {
		if (!this.queue.length) {
			return console.error('Queue is Empty!')
		}

		const result = this.queue.splice(this._maxValueIndex, 1)[0]
		this._maxValueIndex = this.queue.reduce(
			(maxIdx, value, index) => (this.queue[maxIdx] < value ? index : maxIdx),
			0
		)
		return result
	}
}
