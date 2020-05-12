public class MixedSum {

  /*
  * Assume input will be only of Int or String type
  */
  public fun sum(mixed: List<Any>): Int = mixed.map { it.toString().toInt() }.sum()
}
