const exchange = (a, b) => {
	const { setPrototypeOf, getPrototypeOf } = Object
	const protos = [a, b].map(o => getPrototypeOf(o))
	;[b, a].forEach((o, i) => setPrototypeOf(o, protos[i]))
}
