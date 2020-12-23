// eslint-disable-next-line no-extend-native
Object.prototype.get = function (s) {
	const keyList = s.split('.') // ['a'] ['b','x'] ['c']
	let o = this
	for (const key of keyList) {
		if (!o[key]) { return }
		o = o[key]
	}

	return o
}

const obj = { a: 1, b: { x: 2 } }
console.log(obj.get('a'))// return 1
console.log(obj.get('b.x')) // return 2
console.log(obj.get('c'))// return undefined
