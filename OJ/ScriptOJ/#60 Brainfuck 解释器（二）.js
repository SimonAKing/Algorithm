const brainFuck = (code, input = '') => {
	let A = Array.from({ length: 256 }, _ => 0)
	let I = 0
	let J = 0
	let R = ''
	try {
		const resolve = (code, isFirst) => {
			while (A[I] || isFirst) {
				for (let i = 0; i < code.length; ++i) {
					let v = code[i]
					if (v === '>') {
						I++
						if (I === 256) {
							throw new Error('Fail')
						}
					} else if (v === '<') {
						I--
						if (I < 0) {
							throw new Error('Fail')
						}
					} else if (v === '+') {
						A[I] = (A[I] + 1) % 256
					} else if (v === '-') {
						if (A[I] - 1 < 0) {
							throw new Error('Fail')
						}
						A[I]--
					} else if (v === '.') {
						R += String.fromCodePoint(A[I])
					} else if (v === ',') {
						if (J === input.length) {
							throw new Error('Fail')
						}
						A[I] = input.charCodeAt(J++)
					} else if (v === '[') {
						let j = i + 1
						let t = 1
						for (; j < code.length; ++j) {
							if (code[j] === '[') {
								t++
							} else if (code[j] === ']') {
								t--
							}
							if (!t) {
								break
							}
							if (t < 0) {
								throw new Error('Fail')
							}
						}
						if (t > 0) {
							throw new Error('Fail')
						}
						resolve(code.substring(i + 1, j))
						i = j
					} else {
						throw new Error('Fail')
					}
				}
				if (isFirst) {
					return
				}
			}
		}
		resolve(code, true)
	} catch (error) {
		throw new Error('Fail')
	}
	return R
}
