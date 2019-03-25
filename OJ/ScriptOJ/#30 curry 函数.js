{
	const curry = (fn, arity = fn.length, ...args) =>
		arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)
}

{
	const curry = (f, arr = []) => (...args) =>
		(a => (a.length >= f.length ? f(...a) : curry(f, a)))([...arr, ...args])
}
