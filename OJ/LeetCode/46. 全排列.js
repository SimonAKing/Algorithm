/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
	const result = []
	const generate = (cursor, current) => {
		if (current.length === nums.length) {
			result.push(current)
			return
		}
		// nums.filter(el => !current.includes(el)).forEach(el => { generate([...current, el]) })
		for (let i = 0; i < nums.length; i++) {
			if (cursor.includes(i)) { continue }
			generate([...cursor, i], [...current, nums[i]])
		}
	}
	generate([], [])
	return result
}
