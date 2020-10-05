let line
let values
let memo = {}

const fillValues = (current, end, value, map) => {
	memo[current] = true
	const pathList = map.filter(({ start, end }) => start === current && !memo[end])
	if (!pathList || !pathList.length) { return }

	for (const path of pathList) {
		if (path.end === end) {
			values.push(Math.max(value, path.value))
		} else {
			fillValues(path.end, end, Math.max(value, path.value), map)
		}
	}
}

while (line = read_line()) {
	values = []
	memo = {}
	let [n, m, s, t] = line.split(' ').map(v => Number.parseInt(v))
	const map = []
	while (m) {
		const [start, end, value] = read_line().split(' ').map(v => Number.parseInt(v))
		map.push({ start, end, value })
		m--
	}

	fillValues(s, t, Number.MIN_VALUE, map)
	print(Math.min(...(!values.length ? [0] : values)))
}
