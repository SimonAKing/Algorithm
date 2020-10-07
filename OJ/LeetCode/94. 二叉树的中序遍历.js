/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = root => {
	const order = []

	const walk = (root) => {
		if (!root) { return }
		root.left && walk(root.left)
		order.push(root.val)
		root.right && walk(root.right)
	}

	walk(root)

	return order
}
