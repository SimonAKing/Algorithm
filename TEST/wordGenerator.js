const generateWords = (option) => {
	const { maxLength } = option
	const COUNTOFALPHABET = 26
	const alphabet = Array.from({ length: COUNTOFALPHABET }, (_, i) => String.fromCharCode(97 + i))
	const words = [...alphabet]

	const generate = word => {
		if (word.length === maxLength) {
			return
		}

		alphabet.forEach(letter => {
			const newWord = word + letter
			words.push(newWord)
			generate(newWord)
		})
	}
	alphabet.forEach(letter => { generate(letter) })
	return words
}

const option = {
	maxLength: 'pneumonoultramicroscopicsilicovolcanoconiosis'.length,
}

const words = generateWords(option)
console.log(words.length)

const fs = require('fs')

const write = words => {
	fs.writeFileSync('./words.json', words)
}

write(words)

/**
 * 长度为 5 时, 可生成 12356630 个单词, 生成json文件高达 70mb...
 */
