const findMostProductivePigChildrenCount = (dom, generations = [dom.childElementCount], index) => {
	if(index) {
		generations[index] = Math.max(
			generations[index] || 0,
			dom.childElementCount
		)
	}
	if (!dom.childElementCount) {
		return generations
	}
	[...dom.children].forEach(child => {
		findMostProductivePigChildrenCount(
			child,
			generations,
			index ? index + 1 : 1
		)
	})
	return generations
}
