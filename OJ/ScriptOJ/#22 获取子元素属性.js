const getChildAttributes = (el, prop) =>
	Array.from(el.children).map(dom => dom.getAttribute(prop))
