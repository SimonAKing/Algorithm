package leetcode

func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return root
	}

	root.Left, root.Right = root.Right, root.Left

	root.Right = invertTree(root.Right)

	root.Left = invertTree(root.Left)

	return root
}
