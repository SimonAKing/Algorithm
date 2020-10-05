/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
const game = function (guess, answer) {
	return guess.filter((a, i) => a === answer[i]).length
}
