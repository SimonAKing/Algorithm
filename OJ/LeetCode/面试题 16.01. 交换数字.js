/**
 * @param {number[]} numbers
 * @return {number[]}
 */
const swapNumbers = function (numbers) {
	[numbers[0], numbers[1]] = [numbers[1], numbers[0]]
	return numbers
}
