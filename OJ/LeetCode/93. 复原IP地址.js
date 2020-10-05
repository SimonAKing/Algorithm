/**
 * @param {string} s
 * @return {string[]}
 */
// const restoreIpAddresses = function (s) {
// 	if (!/^\d{4,12}$/.test(s)) {
// 		return []
// 	}
// 	const isVaildIPNode = n => !(/^0\d+$/.test(n) || +n > 255 || +n < 0)
// 	const result = []
// 	const memo = {}
// 	for (let i = 1; i <= 3; i++) {
// 		const a = s.slice(0, i)
// 		if (!isVaildIPNode(a)) { continue }

// 		const s1 = s.slice(i)
// 		if (s1.length < 3) { break }
// 		if (s1.length > 9) { continue }

// 		for (let j = 1; j <= 3; j++) {
// 			const b = s1.slice(0, j)
// 			if (!isVaildIPNode(b)) { continue }
// 			const s2 = s1.slice(j)
// 			if (s2.length < 2) { break }
// 			if (s2.length > 6) { continue }
// 			for (let k = 1; k <= 3; k++) {
// 				const c = s2.slice(0, k)
// 				if (!isVaildIPNode(c)) { continue }
// 				const s3 = s2.slice(k)
// 				if (s3.length < 1) { break }
// 				if (s3.length > 3) { continue }
// 				for (let t = 1; t <= 3; t++) {
// 					const d = s3.slice(0, t)
// 					const s4 = s3.slice(t)
// 					if (s4.length > 0) { continue }
// 					if (!isVaildIPNode(d)) { continue }
// 					const ip = `${a}.${b}.${c}.${d}`
// 					if (!memo[ip]) {
// 						result.push(ip)
// 						memo[ip] = true
// 					}
// 				}
// 			}
// 		}
// 	}

// 	return result
// }

const restoreIpAddresses = function (s) {
	const result = []
	recursion(s, 0, 0, '')
	return result

	function recursion(ip, cursor, segNum, p) {
		if (segNum > 4) { return }
		if (segNum === 4) {
			if (cursor === ip.length) {
				result.push(p)
			}
			return
		}

		for (let i = 1; i < 4; i++) {
			const str = ip.substring(cursor, cursor + i)
			if (/^0\d+$/.test(str) || Number(str) > 255) { return }
			recursion(ip, cursor + i, segNum + 1, p + str + (segNum === 3 ? '' : '.'))
		}
	}
}
