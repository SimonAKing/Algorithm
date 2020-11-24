export function descendingOrder(n: number): number {
	const nums: Array<number> = n.toString().split('').map(e => parseInt(e))

	nums.sort((a, b) => b - a)

	return parseInt(nums.join(''))
}

const result: number = descendingOrder(99991243)

console.log(result)
