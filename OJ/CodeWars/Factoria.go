package kata

func Factorial(n int) int {
	if n == 0 {
		return 1
	}
	return Factorial(n-1) * n
}
