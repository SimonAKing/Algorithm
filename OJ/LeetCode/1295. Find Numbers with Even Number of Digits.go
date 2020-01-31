import "strconv"

func findNumbers(nums []int) int {
  result := 0
  
  for _,item := range nums {
    if len(strconv.Itoa(item))%2==0 {
      result += 1
    }
  }
  
  return result
}