const cycleGenerator = function* (arr) {
	let i = 0
	while (true) {
		yield arr[i % arr.length]
		i++
	}
}

const arr = [1, 2, 3, 4, 5]

for (let i = 0; i < 1; i++) {
	for (const item of cycleGenerator(arr)) {
		console.log(item)
	}
}
