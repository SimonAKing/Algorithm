// const where = () => Error().stack.match(/(?<=(at\s))[^\s]+/g)[1]
const where = () =>
	Error()
		.stack.match(/at\s[^\s]+/g)[1]
		.slice(3)

{
	/* 非严格模式 */
	const where = () => arguments.callee.caller.name
}
