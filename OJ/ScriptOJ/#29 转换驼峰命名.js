const toCamelCaseVar = v =>
	v.replace(/[a-zA-Z]_+[a-zA-Z]/g, s => s[0] + s[s.length - 1].toUpperCase())
