const num1 = [3, 4, 5, 6, 7]
const num2 = [43, 23, 5, 67, 87, 3, 6]

const zipWith = func => (arr1, arr2) => {
	if (!arr1.length || !arr2.length) {
		return []
	}
	const [head1, ...total1] = arr1
	const [head2, ...total2] = arr2
	return [func(head1, head2), ...zipWith(func)(total1, total2)]
}

console.log(zipWith((a, b)=> a + b)(num1, num2))
