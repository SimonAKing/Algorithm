package _37__删除链表中的节点

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteNode(node *ListNode) {
	next := node.Next
	for next.Next != nil {
		node.Val, next.Val = next.Val, node.Val
		node = next
		next = next.Next
	}
	node.Val = next.Val
	node.Next = nil
}
