object Kata {
  fun digitize(n: Long): IntArray = n.toString().map(Character::getNumericValue).reversed().toIntArray()
}
