fun comp(a: IntArray?, b: IntArray?): Boolean {
  if (a == null || b == null) {
    return false
  }
  a.sort()
  b.sort()
  for ((i) in b.withIndex()) {
    if (b[i] != a[i] * a[i]) {
      return false
    }
  }
  return true
}

// fun comp(a: IntArray?, b: IntArray?) = a != null && b != null && a.map { it * it }.sorted() == b.sorted()
