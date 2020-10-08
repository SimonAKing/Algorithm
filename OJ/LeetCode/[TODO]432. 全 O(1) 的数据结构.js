// https://leetcode-cn.com/problems/all-oone-data-structure/

/**
 * Initialize your data structure here.
 */
const AllOne = function () {
	this.data = {}
	this.max = Number.MIN_VALUE
	this.min = Number.MAX_VALUE
	this.maxKey = ''
	this.minKey = ''
}

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
	this.data[key] = this.data[key] ? (this.data[key] + 1) : 1
	if (!this.maxKey) {
		this.maxKey = key
		this.max = this.data[key]
	}
	if (!this.minKey) {
		this.minKey = key
		this.min = this.data[key]
	}
	if (this.data[key] > this.max) {
		this.max = this.data[key]
		this.maxKey = key
	}
	if (this.data[key] < this.min) {
		this.min = this.data[key]
		this.minKey = key
	}
}

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
	this.data[key] = (this.data[key] && this.data[key] > 1) ? (this.data[key] - 1) : null
	if (!this.data[key]) { return }
	if (!this.maxKey) {
		this.maxKey = key
		this.max = this.data[key]
	}
	if (!this.minKey) {
		this.minKey = key
		this.min = this.data[key]
	}
	if (this.data[key] > this.max) {
		this.max = this.data[key]
		this.maxKey = key
	}
	if (this.data[key] < this.min) {
		this.min = this.data[key]
		this.minKey = key
	}
}

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
	return this.data[this.maxKey] ? this.maxKey : ''
}

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
	return this.data[this.minKey] ? this.minKey : ''
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
