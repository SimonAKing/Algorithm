const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function lessThan3(number) {
	return number < 3
}

function greaterThan4(number) {
	return number > 4
}
const a = query().select().from(numbers).where(lessThan3, greaterThan4).execute()

console.log('a:', a)