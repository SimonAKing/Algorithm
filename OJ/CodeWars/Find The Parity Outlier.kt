fun find(integers: Array<Int>): Int {
  val isEven = integers.take(3).fold(0) { acc, el -> acc + (if (el and 1 == 1) -1 else 1) } > 0
  return integers.first { if (isEven) it % 2 != 0 else it % 2 == 0 }
}

/*

fun find(integers: Array<Int>) = integers.singleOrNull { it % 2 == 0 } ?: integers.single { it % 2 != 0 }

fun find(integers: Array<Int>) = integers.partition { it % 2 == 0 }.toList().minBy { it.size }!![0]

fun find(integers: Array<Int>): Int {
  val (even, odd) = integers.partition { it % 2 == 0 }
  return if (even.size == 1) even[0] else odd[0]
}

fun find(integers: Array<Int>): Int =
  integers.groupBy { it % 2 == 0 }.values.first { it.size == 1 }.first()

 */
