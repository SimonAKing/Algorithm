class Box {
	constructor(array) {
		this.array = array
		this.index = 0
	}
	[Symbol.iterator]() {
		return this
	}
	next() {
		if (this.index === this.array.length) {
			return { done: true }
		}
		return { value: this.array[this.index++], done: false }
	}
}
