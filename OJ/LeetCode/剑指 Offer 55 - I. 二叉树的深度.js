/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
	let result = 0

	const getDepth = (node, depth) => {
		if (!node) {
			result = Math.max(result, depth)
			return
		}

		getDepth(node.left, depth + 1)
		getDepth(node.right, depth + 1)
	}

	getDepth(root, 0)

	return result
}
