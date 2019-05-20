package kata

func FindUniq(arr []float32) float32 {
	length := len(arr)
	for i := 1; i < length; i++ {
		if arr[i] == arr[i-1] {
			continue
		} else {
			if i < length-1 {
				if arr[i] == arr[i+1] {
					return arr[i-1]
				} else if arr[i-1] == arr[i+1] {
					return arr[i]
				}
			}
		}
	}
	return arr[length-1]
}
