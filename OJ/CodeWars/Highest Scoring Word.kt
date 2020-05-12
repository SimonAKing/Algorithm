fun high(str: String): String = str.split(" ").maxBy { it.toCharArray().sumBy { it.toInt() - 96 } }!!
