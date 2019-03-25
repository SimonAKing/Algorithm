const convertSymbolToNormalStr = obj =>
	Object.getOwnPropertySymbols(obj).reduce(
		(r, symbol) => ((r[symbol.toString().slice(7, -1)] = obj[symbol]), r),
		{}
	)
