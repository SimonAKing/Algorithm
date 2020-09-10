/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
	const n = Number.parseInt(`${Math.abs(x)}`.split('').reverse().join('')) * (x < 0 ? -1 : 1)
	return (n > 2 ** 31 - 1 || n < (-2) ** 31) ? 0 : n
}
