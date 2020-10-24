const fs = require('fs')
const path = require('path')

const findFileNameByType = (type, base = './') => {
	const result = []
	const dir = fs.readdirSync(base)

	for (const file of dir) {
		const isDir = fs.statSync(file).isDirectory()
		if (isDir) {
			const files = findFileNameByType(type, path.join(base, file))
			result.push(...files)
			continue
		}

		if (file.split('.').pop() === type) {
			result.push(file)
		}
	}

	return result
}

const jsList = findFileNameByType('js')

console.log(jsList)
