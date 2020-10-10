const restoreIpAddresses = s => {
	if (s.length < 4 || s.length > 12) { return [] }
	const ipList = []
	const isValid = node => !/^0\d+$/.test(node) && +node <= 255
	const fillIpList = (nodes, cursor) => {
		if (nodes.length > 4) { return }
		if (nodes.length === 4) {
			if (cursor >= s.length) {
				ipList.push(nodes.join('.'))
			}
			return
		}

		for (let i = 1; i <= 3 && cursor + i <= s.length; i++) {
			const node = s.substr(cursor, i)
			if (!isValid(node)) { continue }
			fillIpList([...nodes, node], cursor + i)
		}
	}

	fillIpList([], 0)

	return ipList
}
