export function sumDigits(number: number): number {
	return number.toString().slice(number < 0 ? 1 : 0).split('').map(e => parseInt(e)).reduce((s, e) => s + e)
}

console.log(sumDigits(-32));
