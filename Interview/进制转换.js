function baseConverter(decNumber, base) {
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const remStack = []

  let number = decNumber
  let rem
  let baseString = ''

  if (!(base >= 2 && base <= 36)) {
    return baseString
  }

  while (number > 0) {
    rem = Math.floor(number % base)
    remStack.push(rem)
    number = Math.floor(number / base)
  }

  while (remStack.length) {
    // 对栈中的数字做转化
    baseString += digits[remStack.pop()]
  }

  return baseString
}
