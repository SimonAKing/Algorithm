Array.prototype.flat = function() {
	return this.reduce((result, el) => {
		if (Array.isArray(el)) {
			result.push(...el.flat())
		} else {
			result.push(el)
		}
		return result
	}, [])
}

const injectSections = (items, sections) => {
	return items
		.reduce((result,item, index) => {
			const _sections = sections
				.filter(el => el.index === index)
				.map(({ content }) => content)
			if (Array.isArray(_sections)) {
				result.push(_sections)
			}
			result.push(item)
			return result
		}, [])
		.flat()
}
