const centerPad = (str, len, pad) => {
	const restLength = len - str.length
	if (restLength <= 0) {
		return str
	}
	const full = pad.repeat(restLength)
	return (
		full.slice(0, restLength / 2) +
		str +
		full.slice(0, restLength / 2 + (restLength % 2))
	)
}

{
	const centerPad = (str, len, pad) =>
		str.padStart((len - str.length) / 2 + str.length, pad).padEnd(len, pad)
}
