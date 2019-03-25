const safeGet = (data, path) => {
	const properties = path.split('.')
	return properties.reduce(
		(result, key) =>
			(result = result && result.hasOwnProperty(key) ? result[key] : undefined),
		data
	)
}
