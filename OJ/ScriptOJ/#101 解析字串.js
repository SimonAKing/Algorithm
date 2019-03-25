const extractStr = str => {
	const result = str.match(/\:+([^.:]*)(?=\.+)/g) || []
	return result.map(el => el.replace(/^\:+/, ''))
}
