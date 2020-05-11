fun sum(numbers: IntArray): Int = numbers.asSequence().filter { it > 0 }.sum()

// fun sum(numbers: IntArray): Int = numbers.sumBy { it.coerceAtLeast(0) }
