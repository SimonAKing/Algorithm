const decodeString = (s) => {
  let numStack = [] // 存 倍数num 的栈
  let strStack = [] // 存 待拼接的str 的栈
  let num = 0 // 倍数的“搬运工”
  let result = '' // 字符串的“搬运工”
  for (const char of s) { // 逐字符扫描
    if (!isNaN(char)) { // 遇到数字
      num = num * 10 + Number(char) // 读取数字
    } else if (char === '[') { // 遇到 [
      strStack.push(result) // result串进入strStack栈等待
      result = '' // 完成进栈后 清零
      numStack.push(num) // 倍数num进入栈等待
      num = 0 // 完成进栈后 清零
    } else if (char === ']') { // 遇到 ]，两个栈的栈顶出栈
      let repeatTimes = numStack.pop() // 获取拷贝次数
      result = strStack.pop() + result.repeat(repeatTimes) // 构建子串
    } else { // 遇到字母，追加给result串
      result += char
    }
	}
	return result
}

function convertString(str) {
  const reg = /(\d+)\[([^[\]]+)\]/g
  const res = str.replace(reg, (_, p1, p2) => p2.repeat(p1))
  return reg.test(res) ? convertString(res) : res
}
