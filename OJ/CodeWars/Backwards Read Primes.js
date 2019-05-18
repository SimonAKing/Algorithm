function isPrime(n) {
  if (n <= 3) {
    return n > 1
  }
  if (n % 6 != 1 && n % 6 != 5) {
    return false
  }
  const sqrt = Math.sqrt(n)
  for (let i = 5; i <= sqrt; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false
    }
  }
  return true
}

const backwardsPrime = (_, end, start = Math.max(_, 13)) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i).filter(
    (e, _, __, b = +[...`${e}`].reverse().join('')) =>
      e !== b && isPrime(e) && isPrime(b)
  )
