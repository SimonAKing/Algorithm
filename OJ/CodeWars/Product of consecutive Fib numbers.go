package kata

import "math"

var CacheV2 = map[uint64]uint64{0: 0, 1: 1}

func Fib(n uint64) uint64 {
	v, had := CacheV2[n]
	if had {
		return v
	}
	r := Fib(n-1) + Fib(n-2)
	CacheV2[n] = r
	return r
}

func Iter() <-chan uint64 {
	ch := make(chan uint64)
	go func() {
		var i uint64
		for i < math.MaxUint64 {
			ch <- i
			i++
		}
		close(ch)
	}()
	return ch
}

func ProductFib(prod uint64) [3]uint64 {
	for i := range Iter() {
		a, b := Fib(i), Fib(i+1)
		p := a * b

		if p == prod {
			return [3]uint64{a, b, 1}
		}
		if p > prod {
			return [3]uint64{a, b, 0}
		}
	}
	return [3]uint64{}
}
