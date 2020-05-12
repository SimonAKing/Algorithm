fun persistence(num: Int): Int {
  if (num < 10) {
    return 0
  }
  val n = num.toString().fold(1) { acc, el -> acc * el.toString().toInt() }
  return 1 + persistence(n)
}

// 2
fun persistence(num: Int): Int {
  if (num < 10) {
    return 0
  }
  val n = num.toString().map { it.toString().toInt() }.reduce(Int::times)
  return 1 + persistence(n)
}

// 3
fun persistence(num: Int): Int {
  if (num < 10) {
    return 0
  }
  val n = num.toString().map(Character::getNumericValue).reduce(Int::times)
  return 1 + persistence(n)
}

// 4
fun persistence(num: Int) = generateSequence(num) {
  it.toString().map(Character::getNumericValue).reduce(Int::times)
}.takeWhile { it > 9 }.count()
