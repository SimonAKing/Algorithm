String.prototype.reverse = function() {
	return [...this].reverse().join('')
}
function commafy(num) {
	const [content, tail] = num.toString().split('.')
	return (
		`${num < 0 ? '-' : ''}${content
			.reverse()
			.match(/(\d{3}|\d{1,2})/gy)
			.join(',')
			.reverse() }${tail ? `.${tail}` : ''}`
	)
}

{
	function commafy(num) {
		const [content, tail] = num.toString().split('.')
		return content.replace(/(?!\b)(?=(\d{3})+$)/g, ',') + (tail ? `.${tail}` : '')
	}
}
