package solution

object ASum {

  fun findNb(m: Long): Long {
    val b = Math.pow(m.toDouble(), 1.0 / 3.0).toLong()
    var sum: Long = 0
    for (i in 1..b) {
      sum += i * i * i
      if (sum == m) {
        return i
      }
    }
    return -1
  }
}
