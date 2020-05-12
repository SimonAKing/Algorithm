fun incrementString(str: String): String {
  if (str.isEmpty()) {
    return "1"
  }
  if (str.last() !in '0'..'9') {
    return str + "1"
  }
  val n = str.takeLastWhile { it in '0'..'9' }
  val r = (n.toInt() + 1).toString().padStart(n.length, '0')
  return str.dropLastWhile { it in '0'..'9' } + r
}

/*
fun incrementString(str: String): String {
  val n = str.takeLastWhile { it.isDigit() }
  return str.dropLast(n.length) + ((n.toIntOrNull() ?: 0) + 1).toString().padStart(n.length, '0')
}

in '0'..'9' => isDigit()
*/
