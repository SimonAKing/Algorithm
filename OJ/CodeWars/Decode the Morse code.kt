package morsecode

fun decodeMorse(code: String): String =
  code.trim().split(" ".repeat(3)).map {
    it.split(" ").fold("") { acc, el ->
      acc + MorseCode.getOrDefault(el, "")
    }
  }.joinToString(" ")
