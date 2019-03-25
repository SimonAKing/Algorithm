const plusFor = name => {
	let i = 1
	return () => `为${name}+${i++}s`
}
