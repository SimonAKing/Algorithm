const lowestCommonAncestor = (root, p, q) => {
	let pAncestors = [p]
	let qAncestors = [q]
	const walk = (isOver, callback) => {
		let over = false
		const run = (node, nodes) => {
			if (!node || over) { return }
			if (isOver(node)) {
				callback(nodes)
				over = true
			}
			if (over) { return }
			run(node.left, [node, ...nodes])
			run(node.right, [node, ...nodes])
		}

		return run
	}

	walk(node => node === p, nodes => { pAncestors.push(...nodes) })(root, [])

	if (pAncestors.includes(q)) { return q }

	walk(node => node === q, nodes => { qAncestors.push(...nodes) })(root, [])

	if (qAncestors.includes(p)) { return p }

	for (const ancester of pAncestors) {
		if (qAncestors.includes(ancester)) {
			return ancester
		}
	}

	return root
}
