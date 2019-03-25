const highlight = (wraps, ...el) =>
	wraps.reduce(
		(content, wrap, index) =>
			content +
			wrap +
			(el[index] ? `<span style="color:red">${el[index]}</span>` : ''),
		''
	)
