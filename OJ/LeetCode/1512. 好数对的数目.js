/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function (nums) {
	return nums.reduce((r, _, i) => r + nums.slice(i + 1).filter(e => e === _).length, 0)
}
