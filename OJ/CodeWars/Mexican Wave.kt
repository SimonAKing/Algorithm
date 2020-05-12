fun wave(str: String): List<String> =
  str.foldIndexed(mutableListOf()) { index, result, char ->
    if (char.isLetter()) {
      result.add(str.substring(0 until index) + char.toUpperCase() + str.substring(index + 1))
    }
    result
  }

// so smart
fun wave(str: String) = str.indices.map { str.take(it) + str.drop(it).capitalize() }.filter { it != str }
