object Reverse {
  fun reverseWords(str: String): String = str.split(" ").reversed().joinToString(" ")
}
