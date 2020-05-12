package solution

object DirReduction {
  fun dirReduc(arr: Array<String>): Array<String> {
    fun String.isOpposite(that: String) =
      when {
        this == "NORTH" && that == "SOUTH" -> true
        that == "NORTH" && this == "SOUTH" -> true
        that == "EAST" && this == "WEST" -> true
        that == "WEST" && this == "EAST" -> true
        else -> false
      }

    val r = mutableListOf<String>()
    var isSkip = false
    for (i in arr.indices) {
      if (isSkip) {
        isSkip = false
        continue
      }
      if (i + 1 < arr.size && arr[i].isOpposite(arr[i + 1])) {
        isSkip = true
        continue
      }
      r += arr[i]
    }
    return if (r.size == arr.size) arr else dirReduc(Array(r.size) { r[it] })
  }
}

// so smart.
package solution

object DirReduction {
	fun dirReduc(arr: Array<String>): Array<String> {
		if (arr.size <= 1) return arr

		val stack = java.util.Stack<String>()
		val oppositeOf = mapOf(
				"WEST" to "EAST", "EAST" to "WEST",
				"SOUTH" to "NORTH", "NORTH" to "SOUTH"
		)

		for (direction in arr) when {
				stack.empty() -> stack.push(direction)
				stack.peek() == oppositeOf[direction] -> stack.pop()
				else -> stack.push(direction)
		}

		return stack.toTypedArray()
	}
}
