const isNumber = n => +n > 0 && +n < 10

function solveMine(map, n) {
	const M = map.split('\n').map(m => m.split(' '))
	let mines = 0
	for (let i = 0; i < M.length; ++i) {
		for (let j = 0; j < M[i].length; ++j) {
			const res = open(i, j)
			M[i][j] = isNumber(res) ? res : (mines++,'x')
		}
	}
	return mines === n ? M.map(m => m.join(' ')).join('\n') : '?'
}
