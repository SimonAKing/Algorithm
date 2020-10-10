const merge = intervals => {
	for (let i = 0; i < intervals.length; i++) {
		const [currentStart, currentEnd] = intervals[i]
		for (let j = i + 1; j < intervals.length; j++) {
			const [start, end] = intervals[j]
			if (currentStart > end || start > currentEnd) { continue }
			intervals[i] = [Math.min(start, currentStart), Math.max(end, currentEnd)]
			intervals.splice(j, 1)
			i--
			break
		}
	}

	return intervals
}


console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1, 4], [4, 5]]))
