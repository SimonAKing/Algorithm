/**
	*
	* @param numbers int整型一维数组
	* @param target int整型
	* @return int整型一维数组
	*/
function twoSum(numbers, target) {
	// const hash = numbers.reduce((o, n, i) => (o[n] = i + 1, o), {})
	// // console.log(hash)

	// for (let i = 0; i < numbers.length; i++) {
		// const sub = target - numbers[i]
	// 	if (hash[sub] && i + 1 !== hash[sub]) {
	// 		return [i + 1, hash[sub]]
	// 	}
	// }

}

const r = twoSum([3, 2, 4], 6)
console.log(r)

module.exports = {
	twoSum: twoSum
}

const arr = [1, 2, 3, 4, 5, 6]

arr.reduce((prev, cur) => { return prev + cur })
