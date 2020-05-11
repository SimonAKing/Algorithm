fun evenOrOdd(number: Int): String = if (number % 2 == 0) "Even" else "Odd"
fun evenOrOdd(number: Int) = if (number and 1 == 1) "Odd" else "Even"
