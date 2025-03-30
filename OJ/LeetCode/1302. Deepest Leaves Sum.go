package leetcode

func getMaxHeight(node *TreeNode) int {
	if node == nil {
		return 0
	}
	leftHeight := 1 + getMaxHeight(node.Left)
	rightHeight := 1 + getMaxHeight(node.Right)

	if leftHeight > rightHeight {
		return leftHeight
	}

	return rightHeight
}

func forEach(root *TreeNode, fn func(*TreeNode, int), height int) {
	if root == nil {
		return
	}
	fn(root, height)
	forEach(root.Left, fn, height+1)
	forEach(root.Right, fn, height+1)
}

func deepestLeavesSum(root *TreeNode) int {
	maxHeight := getMaxHeight(root)

	sum := 0
	forEach(root, func(node *TreeNode, height int) {
		if height == maxHeight {
			sum += node.Val
		}
	}, 1)

	return sum
}
