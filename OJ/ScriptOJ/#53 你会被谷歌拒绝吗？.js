Array.prototype.fillTree = function(value = null, start = 0) {
	let levelCount = 2 ** (start + 1) - 1

	while (this.length !== levelCount) {
		levelCount = 2 ** (++start + 1) - 1
		if (this.length < levelCount) {
			return Array.from({ length: levelCount }, (_, i) =>
				i in this ? this[i] : value
			)
		}
	}
	return this
}

const getLeftIndex = index => 2 * index + 1
const getRightIndex = index => 2 * index + 2

const swap = (tree, left, right) =>
	([tree[left], tree[right]] = [tree[right], tree[left]])

const swapChildren = (tree, left, right) => {
	if (right >= tree.length) {
		return
	}
	swap(tree, left, right)
	swapChildren(tree, getLeftIndex(left), getLeftIndex(right))
	swapChildren(tree, getRightIndex(left), getRightIndex(right))
}

const invertTree = tree => {
	tree = tree.fillTree()
	tree.forEach((_, i) => swapChildren(tree, getLeftIndex(i), getRightIndex(i)))
	return tree
}
