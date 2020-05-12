fun inArray(array1: Array<String>, array2: Array<String>) =
  array1.sortedArray().filter { s -> array2.any { it.contains(s) } }.distinct().toTypedArray()
