/**
 * Initialize your data structure here.
 */
const AllOne = function () {
	this.map = new Map()
	this.minStack = []
	this.maxStack = []
}

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
	const value = this.map.has(key) ? this.map.get(key).value + 1 : 1
	if (!this.minStack.length) {
		this.minStack.push({ value, key })
	} else {
		const { value: minValue, key: minKey } = this.minStack[this.minStack.length - 1]
		this.minStack.push(value <= minValue ? { value, key } : { value: minValue, key: minKey })
	}
	if (!this.maxStack.length) {
		this.maxStack.push({ value, key })
	} else {
		const { value: maxValue, key: maxKey } = this.maxStack[this.maxStack.length - 1]
		this.maxStack.push(value >= maxValue ? { value, key } : { value: maxValue, key: maxKey })
	}
	this.map.set(key, { value, min: this.minStack[this.minStack.length - 1].value, max: this.maxStack[this.maxStack.length - 1].value })
}

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
	if (!this.map.has(key)) { return }
	let { value, max: { value: maxValue }, min: { value: minValue } } = this.map.get(key)
	if (value === 1) {
		this.map.delete(key)
		this.maxStack.splice(this.maxStack.map(({ value }) => value).indexOf(maxValue), 1)
		this.minStack.splice(this.minStack.map(({ value }) => value).indexOf(minValue), 1)
		return
	}
	value--
	if (!this.minStack.length) {
		this.minStack.push({ value, key })
	} else {
		const { value: minValue, key: minKey } = this.minStack[this.minStack.length - 1]
		this.minStack.push(value <= minValue ? { value, key } : { value: minValue, key: minKey })
	}
	if (!this.maxStack.length) {
		this.maxStack.push({ value, key })
	} else {
		const { value: maxValue, key: maxKey } = this.maxStack[this.maxStack.length - 1]
		this.maxStack.push(value >= maxValue ? { value, key } : { value: maxValue, key: maxKey })
	}
	this.map.set(key, { value, min: this.minStack[this.minStack.length - 1].value, max: this.maxStack[this.maxStack.length - 1].value })
}

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
	console.log(this.maxStack)
	return this.maxStack.length ? this.maxStack[this.maxStack.length - 1].key : ''
}

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
	console.log(this.minStack)
	return this.minStack.length ? this.minStack[this.minStack.length - 1].key : ''
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
