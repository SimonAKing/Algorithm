fun solution(input: String, markers: CharArray): String =
  input.split("\n").joinToString("\n") {
    markers.fold(it) { acc, c -> acc.substringBefore(c) }.trim()
  }

// input.split("\n") = input.lines()
fun solution(input: String, markers: CharArray): String =
  input.lines().joinToString("\n") {
    markers.fold(it) { acc, c -> acc.substringBefore(c) }.trim()
  }

// other solution
fun solution(input: String, markers: CharArray): String =
   input.lines().map { line ->
       line.split(*markers).first().trimEnd()
   }.joinToString("\n")
