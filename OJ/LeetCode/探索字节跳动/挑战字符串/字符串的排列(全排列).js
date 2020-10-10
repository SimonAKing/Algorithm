const checkInclusion = (s1, s2) => {
	if (s1.length > s2.length) { return false }
	const s1Arr = [...`${s1}`]
	if (!s1Arr.every(letter => s2.includes(letter))) { return false }

	const combinations = []

	const permutate = (forEach, isOver, callback, initValue) => {
		const generate = (current, visited) => {
			if (isOver(current)) {
				callback(current)
				return
			}
			forEach((letter, index) => {
				if (visited.includes(index)) { return }
				generate(current + letter, [...visited, index])
			})
		}
		generate(initValue, [])
	}

	permutate(Array.prototype.forEach.bind(s1Arr), current => current.length === s1.length, current => { combinations.push(current) }, '')

	return combinations.some(str => s2.includes(str))
}

/**
 * 将大数据 划分出一个 已小数据为尺寸的窗口
 * 比较 窗口的hash 与小数据的 hash 是否相同, 如果相同的话就说明 窗口是小数据的排列之一
 * 如果不相同, 窗口移动
 */
