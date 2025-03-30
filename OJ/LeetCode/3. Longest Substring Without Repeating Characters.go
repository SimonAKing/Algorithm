package leetcode

func lengthOfLongestSubstring(s string) int {

	length := len(s)
	result := 0

	for i := 0; i < length; i++ {
		current := 1
		hash := make(map[byte]bool)
		hash[s[i]] = true

		for j := i + 1; j < length; j++ {
			if _, existed := hash[s[j]]; existed {
				break
			}
			current++
			hash[s[j]] = true
		}
		if result < current {
			result = current
		}
	}

	return result

}
