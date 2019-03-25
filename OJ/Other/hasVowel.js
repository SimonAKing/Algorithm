const randomStr = 'adjeiosdnw'

const isVowel = char => ['a','e','i','o','u'].includes(char)

const containsVowel = str => [...str].some(isVowel)

console.log(containsVowel(randomStr))

