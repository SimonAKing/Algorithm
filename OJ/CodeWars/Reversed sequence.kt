fun reverseSeq(n: Int): List<Int> = generateSequence(n) { it - 1 }.take(n).toList()

fun reverseSeq(n: Int) = (n downTo 1).toList()
fun reverseSeq(n: Int) = List(n) { n  - it }

