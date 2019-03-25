const toChineseNum = num => {
	if (!num) {
		return '零'
	}

	const digits = [ '零', '一', '二', '三', '四', '五', '六', '七', '八', '九' ]
	const units = ['十', '百', '千', '万']

	return (
		(num < 0 ? '负' : '') +
		[...`${num < 0 ? -num : num}`]
			.map(
				(el, idx, { length }) =>
					digits[el] + (el ? units[(length - idx - 2) % 4] || '' : '')
			)
			.join('')
			.replace(/零(十|百|千)/g, '零')
			.replace(/零+/g, '零')
			.replace(/零+$/, '')
			.replace(/零万/g, '万')
	)
}
