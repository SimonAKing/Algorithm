const zigzagLevelOrder = root => {
	const result = []

	const walk = (node, level) => {
		if (!node) { return }
		if (level === result.length) { result.push([]) }

		if (level % 2 === 0) {
			result[level].push(node.val)
		} else {
			result[level].unshift(node.val)
		}

		walk(node.left, level + 1)
		walk(node.right, level + 1)
	}

	walk(root, 0)

	return result
}
