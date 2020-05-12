//my solution => ugly
fun tribonacci(signature: DoubleArray, n: Int): DoubleArray {
  if (n == 0) {
    return doubleArrayOf()
  }
  val result = MutableList(n) { signature.getOrNull(it) ?: -1.0 }
  return result.mapIndexed { index, d ->
    if (index < 3) {
      d
    } else {
      result[index] = result.subList(index - 3, index).sum()
      result[index]
    }
  }.toDoubleArray()
}

// 1*
fun tribonacci(signature: DoubleArray, n: Int) = generateSequence(Triple(signature[0], signature[1], signature[2])) {
  Triple(it.second, it.third, it.first + it.second + it.third)
}
  .map { it.first }
  .take(n)
  .toList()
  .toDoubleArray()

// 2 DoubleArray(n).also
fun tribonacci(signature: DoubleArray, n: Int) = DoubleArray(n).also {
  for (i in 0 until n) {
    it[i] = if (i < signature.size) signature[i] else it[i - 3] + it[i - 2] + it[i - 1]
  }
}

// 3 memo +=
fun tribonacci(signature: DoubleArray, n: Int): DoubleArray {
  var memo: DoubleArray = signature
  for (i in 3..n - 1) {
    memo += memo[i - 3] + memo[i - 2] + memo[i - 1]
  }
  return memo.sliceArray(0 until n)
}

// 4*
tailrec fun tribonacci(signature: DoubleArray, n: Int): DoubleArray = when (n) {
  0 -> doubleArrayOf()
  in 1..signature.size -> signature.take(n).toDoubleArray()
  else -> tribonacci(doubleArrayOf(*signature, signature.takeLast(3).sum()), n)
}
