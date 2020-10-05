const arr = [1, 1, 2]

const fn1 = arr => [...new Set(arr)]
const fn2 = arr => Array.from(new Set(arr))

const fn3 = arr => arr.filter((el, index) => arr.indexOf(el) === index)

const fn4 = arr => {
	const result = []
	for (let i = 0; i < arr.length; i++) {
		if (!arr.slice(i + 1).includes(arr[i])) {
			result.push(arr[i])
		}
	}
	return result
}

console.log(fn1(arr))
console.log(fn2(arr))
console.log(fn3(arr))
console.log(fn4(arr))

