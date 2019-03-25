const dicts = [
	[0, 1],
	[0, -1],
	[1, 0],
	[-1, 0],
	[1, -1],
	[1, 1],
	[-1, 1],
	[-1, -1]
]

let M, rows, columns, map, total

const forEachMines = (x, y, func) => {
	for (let i = 0; i < dicts.length; ++i) {
		const X = x + dicts[i][0]
		const Y = y + dicts[i][1]
		if (X === -1 || Y === -1 || X === rows || Y === columns) {
			continue
		}
		func(X, Y)
	}
}

const getCharCount = c => {
	let _ = 0
	forSecond((x, y) => {
		M[x][y] === c && _++
	})
	return _
}

const isEnd = () => getCharCount('x') === total

const forSecond = func => {
	for (let i = 0; i < rows; ++i) {
		for (let j = 0; j < columns; ++j) {
			func(i, j)
		}
	}
}

const openAround = (x, y) => {
	forEachMines(x, y, (X, Y) => {
		if (M[X][Y] === '?') {
			M[X][Y] = open(X, Y)
		}
	})
}

const isNumber = n => +n > 0 && +n < 10

const checkAround = (x, y) => {
	let n = +M[x][y]
	let stories = []
	forEachMines(x, y, (X, Y) => {
		if (isNumber(M[X][Y]) || !n) {
			return
		}
		if (M[X][Y] === 'x') {
			n--
			if (!n) {
				forEachMines(x, y, (X1, Y1) => {
					if (M[X1][Y1] === '?') {
						M[X1][Y1] = open(X1, Y1)
					}
				})
				stories = []
			}
		} else if (M[X][Y] === '?') {
			stories.push({ X, Y })
		}
	})
	if (n && stories.length === n) {
		stories.forEach(({ X, Y }) => M[X][Y] = 'x')
	} else if (stories.length !== n) {
		stories.forEach(
			({ X, Y }) =>
				map[X][Y] = map[X][Y]
					? map[X][Y] + n / stories.length
					: n / stories.length
		)
	}
}

const checkMine = () => {
	forSecond((x, y) => {
		isNumber(M[x][y]) && checkAround(x, y)
	})
}

const checkOther = () => {
	const end = isEnd()
	if (end) {
		forSecond((x, y) => {
			if (M[x][y] === '?') {
				M[x][y] = open(x, y)
			}
		})
	}
	return end
}

const hasDarkMines = () => {
	const darks = []
	forSecond((X, Y) => {
		if (M[X][Y] === '?') {
			darks.push({ X, Y, result: map[X][Y] || 0 })
		}
	})
	if (!darks.length) {
		return false
	}
	darks.sort((a, b) => a.result < b.result)

	if (darks[1] && darks[0].result === darks[1].result) {
		return false
	}
	while (true) {
		const { X, Y } = darks[0]
		M[X][Y] = 'x'
		checkMine()
		if (!checkOther()) {
			M[X][Y] = '?'
		}else{
			return false
		}
		const { X:X1, Y:Y1 } = darks[darks.length-1]
		M[X1][Y1] = open(X1,Y1)
		checkMine()
		if (!checkOther()) {
			M[X1][Y1] = '?'
		} else {
			return false
		}
		darks.shift()
		darks.pop()
	}
}

function solveMine(ma, n) {
	M = ma.split('\n').map(m => m.split(' '))
	total = n
	rows = M.length
	columns = M[0].length
	map = Array.from({ length: rows }).map(_ => _ = [])

	forSecond((x, y) => {
		M[x][y] == 0 && openAround(x, y)
	})

	while (true) {
		const preMap = JSON.stringify(M)

		checkMine()
		if (checkOther()) {
			return M.map(m => m.join(' ')).join('\n')
		}
		if (preMap === JSON.stringify(M) && !hasDarkMines()) {
			// return isEnd() ? M.map(m => m.join(' ')).join('\n') : '?'
			return M.map(m => m.join(' ')).join('\n')
		}
	}
}
