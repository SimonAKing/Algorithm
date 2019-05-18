package kata

import (
	"math"
	"strconv"
)

func invertNum(n int) int {
	tempStr := strconv.Itoa(n)
	revStr := Reverse(tempStr)
	val, _ := strconv.Atoi(revStr)
	return val
}

func Reverse(s string) string {
	r := []rune(s)
	for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {
		r[i], r[j] = r[j], r[i]
	}
	return string(r)
}

func isPrime(n int) bool {
	if n <= 3 {
		return n > 1
	}
	if n%6 != 1 && n%6 != 5 {
		return false
	}
	var sqrt = int(math.Sqrt(float64(n)))
	for i := 5; i <= sqrt; i += 6 {
		if n%i == 0 || n%(i+2) == 0 {
			return false
		}
	}
	return true
}

func BackwardsPrime(start int, stop int) []int {
	var primes []int
	Exist := map[int]bool{}
	if start < 13 {
		start = 13
	}
	for i := start; i <= stop; i++ {
		j := invertNum(i)
		if Exist[j] {
			primes = append(primes, i)
			continue
		}
		if i != j && isPrime(i) && isPrime(j) {
			primes = append(primes, i)
			Exist[i] = true
		}
	}
	return primes
}
