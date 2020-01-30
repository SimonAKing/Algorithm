func twoSum(nums []int, target int) []int {
    length := len(nums)
    hash := make(map[int]int,length)

    for i := 0; i < length; i++ {
      num := target - nums[i]
      if j, had := hash[num]; had {
        return []int{j,i}
      }
      hash[nums[i]] = i
    }

    return []int{}
}