const getPageTags = () => [
	...new Set(
		Array.from(document.getElementsByTagName('*')).map(dom => dom.tagName)
	)
]
