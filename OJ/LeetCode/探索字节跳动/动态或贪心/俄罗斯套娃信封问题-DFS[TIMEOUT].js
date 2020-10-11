const maxEnvelopes = envelopes => {
	const subEnvelopesMap = {}
	const envelopesLevel = {}
	for (let i = 0; i < envelopes.length; i++) {
		const [x, y] = envelopes[i]
		const key = `${x}-${y}`
		subEnvelopesMap[key] = envelopes.filter(([_x, _y]) => _x < x && _y < y)
		if (!subEnvelopesMap[key].length) { envelopesLevel[key] = 1 }
	}

	const dfs = (key, level) => {
		const subEnvelopes = subEnvelopesMap[key]
		if (!subEnvelopes.length) { return level }

		envelopesLevel[key] = Math.max(...subEnvelopes.map(([x, y]) => {
			const newKey = `${x}-${y}`
			envelopesLevel[newKey] = dfs(newKey, level + 1)
			return envelopesLevel[newKey]
		}))
		return envelopesLevel[key]
	}

	let result = 0
	for (let i = 0; i < envelopes.length; i++) {
		const [x, y] = envelopes[i]
		const key = `${x}-${y}`
		if (!envelopesLevel[key]) { envelopesLevel[key] = dfs(key, 1) }
		result = Math.max(result, envelopesLevel[key])
	}

	return result
}


console.log(maxEnvelopes([[4, 5], [4, 6], [6, 7], [2, 3], [1, 1]]))
