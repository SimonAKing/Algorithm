fun countPositivesSumNegatives(input: Array<Int>?): Array<Int> =
  if (input.isNullOrEmpty()) emptyArray() else
    intArrayOf(input.count { it > 0 }, input.filter { it < 0 }.sum()).toTypedArray()


// other solutions
fun countPositivesSumNegatives(input : Array<Int>?) : Array<Int> {
    if (input == null || input.isEmpty()) return emptyArray()
    val (positive, negative) = input.partition { it > 0 }
    return arrayOf(positive.count(), negative.sum())
}
