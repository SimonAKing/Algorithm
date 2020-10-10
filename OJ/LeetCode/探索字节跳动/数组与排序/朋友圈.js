const findCircleNum = M => {
	let friendsList = []
	for (let i = 0; i < M.length; i++) {
		for (let j = 0; j < M[i].length; j++) {
			if (M[i][j] === 0) { continue }

			const index = friendsList.findIndex(list => list.includes(i) || list.includes(j))
			if (index === -1) {
				friendsList.push(i === j ? [i] : [i, j])
				M[j][i] = 0
				continue
			}
			friendsList[index].includes(i) && friendsList[index].push(j)
			friendsList[index].includes(j) && friendsList[index].push(i)
		}
	}

	for (let i = 0; i < friendsList.length; i++) {
		for (let j = 0; j < friendsList[i].length; j++) {
			for (let k = i + 1; k < friendsList.length; k++) {
				if (!friendsList[k].includes(friendsList[i][j])) { continue }
				friendsList[i] = [...new Set([...friendsList[i], ...friendsList[k]])]
				friendsList.splice(k, 1)
				j = 0
			}
		}
	}
	return friendsList.length
}
