const range = (start, end) => Array.from({ length: end - start }, (_, i) => start + i)
const videoStitching = (clips, T) => {
	const flags = clips.reduce((arr, [start, end]) => {
		arr[start] = Math.max(arr[start] || 0, end)
		return arr
	}, [])

	let end = 0
	let pre = 0
	let count = 0
	for (const index of range(0, T)) {
		end = Math.max(end, flags[index] || 0)
		if (index === end) {
			return -1
		}
		if (index === pre) {
			count++
			pre = end
		}
	}
	return count
}

console.log(

	videoStitching(
		[[0, 2], [4, 6], [8, 10], [1, 9], [1, 5], [5, 9]],
		10
	)
	,
	videoStitching(
		[[0, 1], [6, 8], [0, 2], [5, 6], [0, 4], [0, 3], [6, 7], [1, 3], [4, 7], [1, 4], [2, 5], [2, 6], [3, 4], [4, 5], [5, 7], [6, 9]],
		9
	)
)
