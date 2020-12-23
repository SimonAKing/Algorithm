const walk = (node: HTMLBaseElement, isOver, callback) => {
	if (!node) { return }
	if (isOver(node)) {
		callback(node)
		return
	}
	Array.from(node.children).forEach((el: HTMLBaseElement) => walk(el, isOver, callback))
	callback(node)
}

const print = (root: HTMLBaseElement) => {
	const isOver = (node: HTMLBaseElement) => !node.children.length
	const callback = (node: HTMLBaseElement) => console.log(node.tagName)
	walk(root, isOver, callback)
}
