
// const reduce = (f, acc, arr) => {
// 	if (arr.length === 0) return acc;
// 	const [head, ...tail] = arr;
// 	return reduce(f, f(head, acc), tail);
// };


function reduce(func) {
	return function _for(arr, result) {
		if (!arr.length) {
			return result
		}
		const [curr, ...total] = arr
		return _for(total, func(result, curr))
	}
}

const test = reduce((total, curr) => total + curr)([1, 2, 3, 4, 5], 0)

console.log(test)
