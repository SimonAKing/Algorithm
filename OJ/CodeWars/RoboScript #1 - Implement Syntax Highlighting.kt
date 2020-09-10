fun highlight(code: String): String {
  fun String.chunkBy(match: (Char, Char) -> Boolean): List<String> =
    this.fold(mutableListOf()) { acc, c ->
      if (acc.isNotEmpty() && match(c, acc.last().last())) {
        acc[acc.lastIndex] = acc.last() + c
      } else {
        acc.add(c.toString())
      }
      acc
    }

  val keywords = hashMapOf('F' to "pink", 'L' to "red", 'R' to "green")
  fun tag(s: String): String = when (s[0]) {
    in keywords.keys -> "<span style=\"color: ${keywords[s[0]]}\">$s</span>"
    in ('0'..'9') -> "<span style=\"color: orange\">$s</span>"
    else -> s
  }

  return code.chunkBy { c1, c2 ->
    (c1 == c2) || (c1.isDigit() && c2.isDigit())
  }.joinToString("") { tag(it) }
}

// regex
fun highlight(code: String): String {
  return Regex("F+|R+|L+|\\d+").replace(code) {
    val colour = when (it.value[0]) {
      'F' -> "pink"
      'L' -> "red"
      'R' -> "green"
      else -> "orange"
    }
    "<span style=\"color: $colour\">${it.value}</span>"
  }
}

