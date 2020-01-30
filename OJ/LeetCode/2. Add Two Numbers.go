/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getValue(l *ListNode) []int{
  result := []int{}

  for l != nil {
    result = append(result , l.Val)
    l = l.Next
  }
  
  return result
}

func getSum(l1 []int,l2 []int) []int{
  result := []int{}
  length := len(l1)
  greaterThanTen := 0
  
  for i:=0; i < length; i++{
    sum := l1[i] + l2[i] + greaterThanTen
    if sum >= 10 {
      greaterThanTen = 1
    } else {
      greaterThanTen = 0
    }
    result = append(result,sum % 10)
  }
  
  if greaterThanTen == 1 {
    result = append(result,1)
  }
  
  return result
}

func addTwoNumbers(node1 *ListNode, node2 *ListNode) *ListNode {
  v1 , v2 := getValue(node1) , getValue(node2)
  l1, l2 := len(v1), len(v2)

  maxLength := l1
  if maxLength < l2 {
    maxLength = l2
    gap := l2-l1
    for i:=0; i < gap; i++ {
      v1 = append(v1,0)
    } 
  }else if maxLength > l2 {
    gap := l1-l2
    for i:=0; i < gap; i++ {
      v2 = append(v2,0)
    }
  }
  
  sum := getSum(v1,v2)
  
  head := &ListNode{Val:sum[0],Next:nil}
  node := head
  for i:=1; i<len(sum); i++ {
    head.Next = &ListNode{Val:sum[i],Next:nil}
    head = head.Next
  }

  return node
  
}